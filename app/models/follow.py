from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User


class Follow(db.Model):
    __tablename__ = 'follows'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    follower = db.Column(db.Integer, db.ForeignKey(User.id))
    following = db.Column(db.Integer, db.ForeignKey(User.id))

    def to_dict(self):
        return {
            "id": self.id,
            "follower": self.follower,
            "following": self.following,
        }
