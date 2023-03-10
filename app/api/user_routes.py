from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

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
    return f'<h1>Create user post: UserID: {userId}</h1>'

# /api/users/<userId>/posts : GET, POST
