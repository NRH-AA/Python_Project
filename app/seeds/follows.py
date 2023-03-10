from app.models import db, environment, SCHEMA
# import model name when it's done
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

    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.add(follow5)
    db.session.add(follow6)
    db.session.add(follow7)
    db.session.add(follow8)
    db.session.add(follow9)
    db.session.add(follow10)
    db.session.add(follow11)
    db.session.add(follow12)
    db.session.add(follow13)
    db.session.add(follow14)
    db.session.add(follow15)


def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM follows"))

    db.session.commit()
