from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    post_title = db.Column(db.String(100), nullable=False)
    post_heading = db.Column(db.String(100), nullable=False)
    post_text = db.Column(db.Text(2000), nullable=False)
    imageURL = db.Column(db.Text(500), nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="posts")
    comments = db.relationship("Comment", back_populates="post")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_title": self.post_title,
            "post_heading": self.post_heading,
            "post_text": self.post_text,
            "imageURL": self.imageURL,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
        }
