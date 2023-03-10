from app.models import db, Follow, environment, SCHEMA
from sqlalchemy.sql import text


def seed_follows():
    follow1 = Follow(
        follower=2,
        following=1
    )
    follow2 = Follow(
        follower=3,
        following=1
    )
    follow3 = Follow(
        follower=3,
        following=9
    )
    follow4 = Follow(
        follower=4,
        following=1
    )
    follow5 = Follow(
        follower=5,
        following=1
    )
    follow6 = Follow(
        follower=5,
        following=4
    )
    follow7 = Follow(
        follower=6,
        following=1
    )
    follow8 = Follow(
        follower=6,
        following=2
    )
    follow9 = Follow(
        follower=6,
        following=3
    )
    follow10 = Follow(
        follower=6,
        following=7
    )
    follow11 = Follow(
        follower=6,
        following=8
    )
    follow12 = Follow(
        follower=7,
        following=10
    )
    follow13 = Follow(
        follower=8,
        following=9
    )
    follow14 = Follow(
        follower=9,
        following=8
    )
    follow15 = Follow(
        follower=10,
        following=3
    )

    follows = [follow1, follow2, follow3, follow4, follow5,
                follow6, follow7, follow8, follow9, follow10,
                follow11, follow12, follow13, follow14, follow15]

    add_follows = [db.session.add(follow) for follow in follows]

    db.session.commit()


def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM follows"))

    db.session.commit()
