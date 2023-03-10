from flask import Blueprint
from flask_login import login_required

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:commentId>', methods=['PUT', 'PATCH'])
@login_required
def edit_comment(commentId):
    return f'<h1>Edit Comment Route: ID: {commentId}</h1>'


@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    return f'<h1>Delete Comment Route: ID: {commentId}'

# /api/comments/<commentId>  : PUT,PATCH,DELETE
