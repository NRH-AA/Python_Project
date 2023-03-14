from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


user_likes = db.Table(
    'user_likes',
    db.Model.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('post_id', db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)

follows = db.Table(
    "follows",
    db.Model.metadata,
    db.Column('follower', db.Integer, db.ForeignKey('users.id', primary_key=True)),
    db.Column('followed', db.Integer, db.ForeignKey('users.id', primary_key=True))
)

if environment == 'production':
    user_likes.schema = SCHEMA
    follows.schema = SCHEMA


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_picture = db.Column(db.Text, default='https://64.media.tumblr.com/543927eaa6100b4a89090ae9caaca7ae/tumblr_nr3p4vlQ8S1u0setpo4_r1_500.png')
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    posts = db.relationship("Post", back_populates="user")
    comments = db.relationship("Comment", back_populates="user")
    liked_posts = db.relationship(
        "Post",
        secondary = "user_likes",
        back_populates = "user_likes"
    )
    followers = db.relationship(
        "User",
        secondary = "follows",
        primaryjoin = follows.c.followed == id,
        secondaryjoin = follows.c.follower == id,
        backref="following"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_picture': self.profile_picture,
            'email': self.email,
            'followers': [follower.to_dict2() for follower in self.followers],
        }
    
    def to_dict2(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_picture': self.profile_picture,
            'email': self.email,
        }
