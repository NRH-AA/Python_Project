from app.models import db, User, Post, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint

def seed_likes():
    users = []
    for i in range(1, 11):
        user = User.query.get(i)
        users.append(user)
    
    posts = []
    for i in range(1, 16):
        post = Post.query.get(i)
        posts.append(post)
    
    for i in range(len(users)):
        user = users[i]
        user.liked_posts.append(posts[randint(1, 14)])

    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
