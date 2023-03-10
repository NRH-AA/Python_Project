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
        new_post = Post(
            user_id = userId,
            post_title = form.post_title.data,
            post_heading = form.post_heading.data,
            post_text = form.post_text.data,
            createdAt = datetime.now(),
            updatedAt = datetime.now()
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()
    
    if form.errors:
        return {"errors": form.errors}

# /api/users/<userId>/posts : GET, POST
