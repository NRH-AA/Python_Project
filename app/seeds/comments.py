from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_comments():
    comment1 = Comment(
        user_id=2,
        post_id=7,
        comment='???',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment2 = Comment(
        user_id=3,
        post_id=7,
        comment='On the one hand, I totally should report this post. On the other hand, I wanna see if anything comes of this.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment3 = Comment(
        user_id=5,
        post_id=6,
        comment='Didn\'t this come out in 1972?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment4 = Comment(
        user_id=8,
        post_id=7,
        comment='Come on guys, it\'s just a hypothetical!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment5 = Comment(
        user_id=9,
        post_id=7,
        comment='I\'d ban them but we haven\'t made a ban button yet.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment6 = Comment(
        user_id=9,
        post_id=10,
        comment='Yes but again, we have no way to get rid of them atm.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment7 = Comment(
        user_id=10,
        post_id=9,
        comment='Very cute!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment8 = Comment(
        user_id=10,
        post_id=9,
        comment='Their names are Scratchy and Puddles!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment9 = Comment(
        user_id=10,
        post_id=10,
        comment='Welcome to the family Scratchy-Two!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment10 = Comment(
        user_id=7,
        post_id=12,
        comment='Please read this article: https://linuxstans.com/sudo-rm-rf/',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment11 = Comment(
        user_id=6,
        post_id=15,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment12 = Comment(
        user_id=7,
        post_id=15,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment13 = Comment(
        user_id=8,
        post_id=15,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment14 = Comment(
        user_id=9,
        post_id=15,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment15 = Comment(
        user_id=10,
        post_id=15,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment16 = Comment(
        user_id=5,
        post_id=15,
        comment='I have been made aware that this is a typewriter.'
    )

    comments = [comment1, comment2, comment3, comment4, comment5,
                comment6, comment7, comment8, comment9, comment10,
                comment11, comment12, comment13, comment14, comment15,
                comment16]

    add_comments = [db.session.add(comment) for comment in comments]

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
