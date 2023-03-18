from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Post
from sqlalchemy import text
from app.forms import PostForm
from datetime import datetime
from app.util import (
    upload_file_to_s3, allowed_file, get_unique_filename)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}

@user_routes.route('/emailExists', methods=['POST'])
def check_email():
    email = request.get_json()['email']
    
    try:
        account = User.query.where(User.email == email).all()
    except:
        return {"errors": ['Email does not exist.']}
    
    if len(account) == 0:
        return {"errors": ['Email does not exist.']}
    
    return {"Success": ['Email Exists']}


@ user_routes.route('/<int:id>')
@ login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


# Get any users posts
@ user_routes.route('/<int:userId>/posts', methods=['GET'])
def get_user_posts(userId):
    return f'<h1>Get user posts: UserID: {userId} </h1>'

# Create a user post


@ user_routes.route('/upload', methods=['POST'])
@ login_required
def upload_image():
    if "image" in request.files:
        image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    imageURL = upload["url"]
    return {"url": imageURL}


@ user_routes.route('/<int:userId>/posts', methods=['POST'])
@ login_required
def create_user_post(userId):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        title = form.post_title.data
        text = form.post_text.data
        imageURL = form.imageURL.data

        new_post = Post(
            user_id=userId,
            post_title=title,
            post_text=text,
            imageURL=imageURL,
            createdAt=datetime.now(),
            updatedAt=datetime.now()
        )
        db.session.add(new_post)
        db.session.commit()

        ret = Post.query.get(new_post.id)
        return ret.to_dict()

    if form.errors:
        return {"errors": form.errors}

# /api/users/<userId>/posts : GET, POST


# Get user's followers
@ user_routes.route('/<int:userId>/followers', methods=['GET'])
@ login_required
def get_user_follower(userId):
    user = User.query.get(userId)
    return {"followers": user.to_dict()["followers"]}

# Get user's followings


@ user_routes.route('/<int:userId>/followings', methods=['GET'])
@ login_required
def get_user_following(userId):
    user = User.query.get(userId)
    return {"followings": user.to_dict()["followings"]}


# Get user's liked_posts
@ user_routes.route('/<int:userId>/liked-posts', methods=['GET'])
@ login_required
def get_user_liked_posts(userId):
    user = User.query.get(userId)
    posts = user.liked_posts
    # return {post.id: post.to_dict() for post in posts}
    return [post.to_dict() for post in posts]

# follow or unfollow an user


@ user_routes.route('/<int:userId>/follow', methods=['POST'])
@ login_required
def follow_unfollow_user(userId):
    target_user = User.query.get(userId)

    curr_user_id = request.get_json()['curr_user_id']
    user = User.query.get(curr_user_id)

    if not user:
        return {"errors": ["User does not exist"]}

    for following in user.followings:
        if following.id == target_user.id:
            user.followings.remove(target_user)
            db.session.commit()
            return user.to_dict()

    user.followings.append(target_user)
    db.session.commit()
    return user.to_dict()
