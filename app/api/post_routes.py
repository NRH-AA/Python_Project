from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Post
from app.forms import PostForm
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

# /api/posts      : GET
# /api/posts/<postId>   : PUT/PATCH/DELETE
