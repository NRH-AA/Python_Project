from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Comment, User
from app.forms import CommentForm
from datetime import datetime

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:commentId>', methods=['PUT', 'PATCH'])
@login_required
def edit_comment(commentId):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    comment = Comment.query.get(commentId)
    
    if not comment:
        return {"errors": ["Invalid Edit Request"]}
    
    if form.validate_on_submit():
        text = form.comment.data
        
        if not text:
            return {"errors": ["Invalid Edit Request"]}
        
        comment.comment = text
        db.session.commit()
        ret = Comment.query.get(commentId)
        return ret.to_dict()
    
    if form.errors:
        return {"errors": form.errors}


@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(commentId)
    
    if not comment:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(comment)
    db.session.commit()
    return {"id": comment.id}

# /api/comments/<commentId>  : PUT,PATCH,DELETE
