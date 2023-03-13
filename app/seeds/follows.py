from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text
from random import randint

def seed_follows():
    users = []
    for i in range(1, 11):
        user = User.query.get(i)
        users.append(user)
    
    for i in range(len(users)):
        user = users[i]
        rand = randint(0, len(users) - 1)
        randUser = users[rand]
        while randUser == user:
            rand = randint(0, len(users) - 1)
            randUser = users[rand]
            
        user.following.append(randUser)

    db.session.commit()

def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM follows"))

    db.session.commit()
