from flask import Blueprint
from flask_login import login_required

post_routes = Blueprint('posts', __name__)

# Get all posts route
@post_routes.route('', methods=['GET'])
def get_posts():
    return f'<h1>Get All Posts Route</h1>'

# Get all posts route
@post_routes.route('/', methods=['GET'])
def get_posts2():
    return f'<h1>Get All Posts Route</h1>'

# Get Single post route
@post_routes.route('/<int:postId>', methods=['GET'])
def get_post(postId):
    return f'<h1>Single Post Route: ID: {postId}</h1>'

# Update post route
@post_routes.route('/<int:postId>', methods=['PUT', 'PATCH'])
@login_required
def edit_post(postId):
    return f'<h1>Edit Post Route: ID: {postId}</h1>'

# Delete post route
@post_routes.route('/<int:postId>', methods=['DELETE'])
@login_required
def delete_post(postId):
    return f'<h1>Delete Post Route: ID: {postId}'

# /api/posts      : GET
# /api/posts/<postId>   : PUT/PATCH/DELETE
