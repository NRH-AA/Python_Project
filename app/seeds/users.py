from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demoUser = User(
        username='Demo',
        email='demo@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user2 = User(
        username='marnie',
        email='marnie@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user3 = User(
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user4 = User(
        username='movieenjoyer',
        email='movies@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user5 = User(
        username='danieltheprogrammer',
        email='daniel@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user6 = User(
        username='normalaccount',
        email='normal@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user7 = User(
        username='gameenjoyer',
        email='games@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user8 = User(
        username='throwaway-account',
        email='fake@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user9 = User(
        username='scrollr-official',
        email='official@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user10 = User(
        username='doglover284',
        email='dogs@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user11 = User(
        username='JollyRandy',
        email='randy@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user12 = User(
        username='normalshoppingcart',
        email='shopping@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user13 = User(
        username='CloudSpotter245',
        email='cloud@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user14 = User(
        username='WackyPuzzles!!!',
        email='puzzles@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user15 = User(
        username='genericUser',
        email='generic@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user16 = User(
        username='Foodie',
        email='food@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user17 = User(
        username='john cruz',
        email='johncruz@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user18 = User(
        username='Daily Antartica Updates',
        email='antartica@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user19 = User(
        username='Federal Bureau of Investigation',
        email='fbi@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user20 = User(
        username='Target',
        email='target@aa.io',
        password='password',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )

    users = [demoUser, user2, user3, user4, user5,
             user6, user7, user8, user9, user10,
             user11, user12, user13, user14, user15,
             user16, user17, user18, user19, user20]

    add_users = [db.session.add(user) for user in users]

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
