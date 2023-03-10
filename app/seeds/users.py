from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demoUser = User(
        firstName='Demo',
        lastName='User',
        username='Demo',
        email='demo@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user2 = User(
        firstName='Marnie',
        lastName='Person',
        username='marnie',
        email='marnie@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user3 = User(
        firstName='Bobbie',
        lastName='Dean',
        username='bobbie',
        email='bobbie@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user4 = User(
        firstName='John',
        lastName='Doe',
        username='movieenjoyer',
        email='movies@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user5 = User(
        firstName='Red',
        lastName='Danny',
        username='danieltheprogrammer',
        email='daniel@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user6 = User(
        firstName='Lou',
        lastName='Glaser',
        username='normalaccount',
        email='normal@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user7 = User(
        firstName='Dan',
        lastName='Smith',
        username='gameenjoyer',
        email='games@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user8 = User(
        firstName='Danny',
        lastName='Doe',
        username='throwaway-account',
        email='fake@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user9 = User(
        firstName='Erin',
        lastName='Akroid',
        username='scrollr-official',
        email='official@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    user10 = User(
        firstName='Maria',
        lastName='Williams',
        username='doglover284',
        email='dogs@aa.io',
        password='password',
        # profilePicUrl='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )

    users = [demoUser, user2, user3, user4, user5,
                user6, user7, user8, user9, user10]

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
