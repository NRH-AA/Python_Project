from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_posts():
    post1 = Post(
        user_id=2,
        post_title='This is my first post to Scrollr! Happy to be here!',
        post_heading='',
        post_text='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post2 = Post(
        user_id=3,
        post_title='Look at this cute cat!',
        imageURL='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcats%2F&psig=AOvVaw1jc_v0zf_uztnBUf4_CUzO&ust=1678559077539000&source=images&cd=vfe&ved=2ahUKEwjC-Nb9_dH9AhWlmYQIHcziCQgQjRx6BAgAEAo',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post3 = Post(
        user_id=4,
        post_title='Does anyone know that one actor is from that one movie with the bus on the highway?',
        post_text='For the life of me I cannot remember the actor nor the movie name. Any help here?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post4 = Post(
        user_id=5,
        post_title='Just graduated App Academy!',
        post_heading='After about half a year I did it!',
        post_text='It was okay.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post5 = Post(
        user_id=6,
        post_title='Something\'s off...',
        post_text='I feel like this site is infringing on a certain other social media platform...',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post6 = Post(
        user_id=7,
        post_title='Just found this new game!',
        post_heading='It\'s called Pong. Really intuitive controls and incredible story. 10/10!',
        imageURL='https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/04/16/Pong460x276.jpg?width=465&quality=85&dpr=1&s=none',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post7 = Post(
        user_id=8,
        post_title='HELP!',
        post_text='Hypothetically, if I found a suitcase filled with rare gems and cash on the beach a few days after a jewlery store was robbed, how can I sell these without raising questions?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post8 = Post(
        user_id=9,
        post_title='Thank you!',
        post_text='It has officially been out 1 year anniversary being out on the internet. And we wouldn\'t be here if it were not for all of our users. Thanks for being here, and here\'s to another good year!',
        imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwkxjYFUj-CuZCBppPC0ImpKSarJzgXvLLw&usqp=CAU',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post9 = Post(
        user_id=10,
        post_title='I think I have two many dogs...',
        imageURL='https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post10 = Post(
        user_id=2,
        post_title='???',
        post_text='I was on here earlier and found a post about some person finding stolen goods. Should we be concerned about that?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post11 = Post(
        user_id=3,
        post_title='20 whole years together!',
        post_text='Happy to say our marrige has been going strong for 20 whole years! That\'s all. Just wanted to say :>',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post12 = Post(
        user_id=4,
        post_title='A little bit of terminal help plz',
        post_text='I ran a command (I think it was something like sudo rm -rf /) and now my computer won\'t start. Help?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post13 = Post(
        user_id=10,
        post_title='I got three dogs now!',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/d/de/Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post14 = Post(
        user_id=6,
        post_title='Great new game just dropped!',
        imageURL='https://play-lh.googleusercontent.com/36FNeTAKSh3hg1VBzOUNyq1G9Djy_uu6vQ5D_3Yru1GyNEzAckDiqGaGBqzCeQja1w=w526-h296-rw',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post15 = Post(
        user_id=4,
        post_title='I got a new computer!',
        imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGcs082SfAXM65J9RNyuvH3UDG9TfH-DRo_f3SQn0IxCMVT24Na6fonmF8_YYC4RlGBI&usqp=CAU',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )

    posts = [post1, post2, post3, post4, post5,
                post6, post7, post8, post9, post10,
                post11, post12, post13, post14, post15]

    add_posts = [db.session.add(post) for post in posts]

    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
