from flask import Blueprint, request
from flask_login import login_required
from sqlalchemy.sql import text
from app.models import db, Post, Comment, User
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
        title = form.post_title.data
        imageURL = form.imageURL.data
        text = form.post_text.data

        if not title and not text:
            return {"errors": ["Invalid Post Request"]}

        post.post_title = title

        post.imageURL = imageURL

        post.post_text = text

        post.updatedAt = datetime.now()

        db.session.commit()
        ret=Post.query.get(postId)
        return ret.to_dict()

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

        userId = request.get_json()['user_id']
        new_comment = Comment(
            user_id = userId,
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
def like_post(postId):
    post = Post.query.get(postId)

    user_id = request.get_json()['user_id']
    user = User.query.get(user_id)

    if not user:
        return {"errors": ["User does not exist"]}

    for likedPosts in user.liked_posts:
        if likedPosts.id == post.id:
            user.liked_posts.remove(post)
            db.session.commit()
            ret = Post.query.get(postId)
            return ret.to_dict()

    user.liked_posts.append(post)
    db.session.commit()
    ret = Post.query.get(postId)
    return ret.to_dict()
