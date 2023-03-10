from flask import Blueprint
from flask_login import login_required

like_routes = Blueprint('like', __name__)

@like_routes.route('/<int:likeId>', methods=['DELETE'])
@login_required
def delete_comment(likeId):
    return f'<h1>Delete Like Route: ID: {likeId}'

# /api/likes/<likeId>   : DELETE
