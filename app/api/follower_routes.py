from flask import Blueprint
from flask_login import login_required

follower_routes = Blueprint('follower', __name__)

@follower_routes.route('/<int:followId>', methods=['DELETE'])
@login_required
def delete_comment(followId):
    return f'<h1>Delete Follower Route: ID: {followId}'

# /api/followers/<likeId>   : DELETE
