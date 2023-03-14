from flask import Blueprint, request
from flask_login import login_required
from sqlalchemy.sql import text
from app.models import db, Post, Comment
from app.forms import PostForm, CommentForm
from datetime import datetime

post_routes = Blueprint('posts', __name__)

# Get all posts route
@post_routes.route('', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    
    return [post.to_dict() for post in posts]

# Get all posts route
@post_routes.route('/', methods=['GET'])
def get_posts2():
    posts = Post.query.all()
    return [post.to_dict() for post in posts]

# Get Single post route
@post_routes.route('/<int:postId>', methods=['GET'])
def get_post(postId):
    post = Post.query.get(postId)
    return post.to_dict()

# Update post route
@post_routes.route('/<int:postId>', methods=['PUT', 'PATCH'])
@login_required
def edit_post(postId):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    post = Post.query.get(postId)
    
    if not post:
        return {"errors": ["Invalid Edit Request"]}
    
    
    if form.validate_on_submit():
        if form.post_title.data:
            post.post_title = form.post_title.data
            
        if form.post_heading.data:
            post.post_heading = form.post_heading.data
            
        if form.post_text.data:
            post.post_text = form.post_text.data
            
        post.updatedAt = datetime.now()
        
        db.session.commit()
        return post.to_dict()
    
    if form.errors:
        return {"errors": form.errors}

# Delete post route
@post_routes.route('/<int:postId>', methods=['DELETE'])
@login_required
def delete_post(postId):
    post = Post.query.get(postId)
    
    if not post:
        return {"errors": ["Invalid Delete Request"]}
    
    db.session.delete(post)
    db.session.commit()
    return {"id": postId}

# Create comment route
@post_routes.route('/<int:postId>/comments', methods=["POST"])
@login_required
def create_post_comment(postId):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        new_comment = Comment(
            user_id = form.user_id.data,
            post_id = postId,
            comment = form.comment.data,
            createdAt = datetime.now(),
            updatedAt = datetime.now()
        )
        db.session.add(new_comment)
        db.session.commit()
        
        ret = Comment.query.get(new_comment.id)
        return ret.to_dict()
    
    if form.errors:
        return {"errors": form.errors}
    
@post_routes.route('/<int:postId>/likes', methods=['POST'])
@login_required
def add_post_like(postId):
    post = Post.query.get(postId)
    
    if not post:
        return {"errors": ["Unable to find post"]}
    
    userId = request.get_json()['user_id']
    like = Like.query.where(text(f'user_id = {userId} AND post_id = {postId}')).all()
    likeObj = like and like[0] or None
    
    if not likeObj:
        new_like = Like(
            user_id = userId,
            post_id = postId
        )
    
        db.session.add(new_like)
        db.session.commit()
        return post.to_dict()
    else:
        db.session.delete(likeObj)
        db.session.commit()
        return post.to_dict()
    
        

# /api/posts      : GET
# /api/posts/<postId>   : PUT/PATCH/DELETE
