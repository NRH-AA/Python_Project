from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Post
from app.forms import PostForm
from datetime import datetime

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


# Get any users posts
@user_routes.route('/<int:userId>/posts', methods=['GET'])
def get_user_posts(userId):
    return f'<h1>Get user posts: UserID: {userId} </h1>'

# Create a user post


@user_routes.route('/<int:userId>/posts', methods=['POST'])
@login_required
def create_user_post(userId):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        title = form.post_title.data
        text = form.post_text.data
        
        if not title and not text:
            return {"errors": ["Invalid Post Request"]}
        
        new_post = Post(
            user_id=userId,
            post_title=title,
            post_text=text,
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


# Get user's follower
@user_routes.route('/<int:userId>/followers', methods=['GET'])
def get_user_follower(userId):
    user = User.query.get(userId)
    return {"followers": user.to_dict()["followers"]}


@user_routes.route('/<int:userId>/followings', methods=['GET'])
def get_user_following(userId):
    user = User.query.get(userId)
    return {"followings": user.to_dict()["followings"]}
