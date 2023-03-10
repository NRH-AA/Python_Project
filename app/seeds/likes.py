from app.models import db, environment, SCHEMA
# import model name when it's done
from sqlalchemy.sql import text


def seed_likes():
    like1 = Like(
        user_id=9,
        post_id=2
    )
    like2 = Like(
        user_id=9,
        post_id=4
    )
    like3 = Like(
        user_id=9,
        post_id=5
    )
    like4 = Like(
        user_id=9,
        post_id=7
    )
    like5 = Like(
        user_id=2,
        post_id=8
    )
    like6 = Like(
        user_id=2,
        post_id=3
    )
    like7 = Like(
        user_id=3,
        post_id=3
    )
    like8 = Like(
        user_id=10,
        post_id=9
    )
    like9 = Like(
        user_id=10,
        post_id=12
    )
    like10 = Like(
        user_id=10,
        post_id=13
    )
    like11 = Like(
        user_id=9,
        post_id=5
    )
    like12 = Like(
        user_id=4,
        post_id=7
    )
    like13 = Like(
        user_id=6,
        post_id=4
    )
    like14 = Like(
        user_id=6,
        post_id=11
    )
    like15 = Like(
        user_id=9,
        post_id=1
    )

    likes = [like1, like2, like3, like4, like5,
                like6, like7, like8, like9, like10,
                like11, like12, like13, like14, like15]

    add_likes = [db.session.add(like) for like in likes]

    db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
