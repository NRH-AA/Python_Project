from app.models import db, Post, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_posts():
    post1 = Post(
        user_id=3,
        post_title='Look at this cute cat!',
        imageURL='https://cdn.discordapp.com/attachments/544277536255770695/1069333446654185542/IMG_6095.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post2 = Post(
        user_id=4,
        post_title='Does anyone know that one actor is from that one movie with the bus on the highway?',
        post_text='For the life of me I cannot remember the actor nor the movie name. Any help here?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post3 = Post(
        user_id=16,
        post_title='Delicious!!!',
        imageURL='https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2022/08/Stovetop-Beef-Stew-1200-080-768x1151.jpg',
        post_text='This beef stew recipie is absolutely incredible. Highly recommend!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post4 = Post(
        user_id=16,
        imageURL='https://images.arigatotravel.com/wp-content/uploads/2020/08/13115317/Square_watermelon.jpg',
        post_text='Look at these watermelons! I did not know that they came in squares!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post5 = Post(
        user_id=18,
        post_title='Updates Day 1',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Snow!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post6 = Post(
        user_id=5,
        post_title='Just graduated App Academy!',
        post_text='It was okay.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post7 = Post(
        user_id=6,
        post_title='Something\'s off...',
        post_text='I feel like this site is infringing on a certain other social media platform...',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post8 = Post(
        user_id=7,
        post_title='Just found this new game!',
        post_text='It\'s called Pong. Really intuitive controls and incredible story. 10/10!',
        imageURL='https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2008/04/16/Pong460x276.jpg?width=465&quality=85&dpr=1&s=none',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post9 = Post(
        user_id=8,
        post_title='HELP!',
        post_text='Hypothetically, if I found a suitcase filled with rare gems and cash on the beach a few days after a jewlery store was robbed, how can I sell these without raising questions?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post10 = Post(
        user_id=10,
        imageURL='https://artincontext.org/wp-content/uploads/2021/11/Dogs-Playing-Poker-Cassius-Marcellus-Coolidge-848x530.avif',
        post_text='Just bought a poster of this painting!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post11 = Post(
        user_id=10,
        imageURL='https://post.bark.co/wp-content/uploads/2013/08/zeus-1.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post12 = Post(
        user_id=9,
        post_title='Friendly reminder!',
        post_text='Friendly reminder to all our users to stop admitting to crimes on our site. I do not know why yall are doing this, but it\'s getting concerning.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post13 = Post(
        user_id=7,
        post_text='I got pretty far in animal crossing and I really enjoy it! I\'m interested in other games like it if anyone has any recommendations.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post14 = Post(
        user_id=9,
        post_title='Thank you!',
        post_text='Scrollr has officially been out long enough to have a 1 year anniversary. And we wouldn\'t be here if it were not for all of our users. Thanks for being here, and here\'s to another good year!',
        imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwkxjYFUj-CuZCBppPC0ImpKSarJzgXvLLw&usqp=CAU',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post15 = Post(
        user_id=10,
        post_title='I think I have two many dogs...',
        imageURL='https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post16 = Post(
        user_id=2,
        post_title='This is my first post to Scrollr! Happy to be here!',
        post_text='',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post17 = Post(
        user_id=2,
        post_title='???',
        post_text='I was on here earlier and found a post about some person finding stolen goods. Should we be concerned about that?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post18 = Post(
        user_id=3,
        post_title='20 whole years together!',
        post_text='Happy to say our marrige has been going strong for 20 whole years! That\'s all. Just wanted to say :>',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post19 = Post(
        user_id=4,
        post_title='A little bit of terminal help plz',
        post_text='I ran a command (I think it was something like sudo rm -rf /) and now my computer won\'t start. Help?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post20 = Post(
        user_id=14,
        post_title='Can YOU solve THIS wAcKy puzzle?',
        imageURL='https://www.smartbrainpuzzles.com/wp-content/uploads/2020/12/Puzzle-Vector-13-scaled.jpg',
        post_text='Can you figure out which way the bus is moving?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post21 = Post(
        user_id=10,
        post_title='I got three dogs now!',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/d/de/Chart_rosyjski_borzoj_rybnik-kamien_pl.jpg',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post22 = Post(
        user_id=6,
        post_title='Great new game just dropped!',
        imageURL='https://play-lh.googleusercontent.com/36FNeTAKSh3hg1VBzOUNyq1G9Djy_uu6vQ5D_3Yru1GyNEzAckDiqGaGBqzCeQja1w=w526-h296-rw',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post23 = Post(
        user_id=4,
        post_title='I got a new computer!',
        imageURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGcs082SfAXM65J9RNyuvH3UDG9TfH-DRo_f3SQn0IxCMVT24Na6fonmF8_YYC4RlGBI&usqp=CAU',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post24 = Post(
        user_id=9,
        post_title='Quick Update!',
        post_text='As of writing, our team is hard at work adding new features all around the site! We thank you for all of your patience, and we can\'t wait to show you what\'s in store for the future of Scrollr!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post25 = Post(
        user_id=12,
        post_text='I love how we all just trust cameras. How do we know that they are showing us the whole picture? What if they decide to hide a tree or something just for kicks? I don\'t trust them.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post26 = Post(
        user_id=12,
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Trebuchet_Castelnaud.jpg/300px-Trebuchet_Castelnaud.jpg',
        post_text='Hear me out... Cars cause pollution. Walking hurts the legs. Flying.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post27 = Post(
        user_id=8,
        post_title='The police are at my door',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post28 = Post(
        user_id=14,
        post_title='Can YOU solve THIS wAcKy puzzle?',
        imageURL='https://www.brainturk.com/images/teaser/3_question.png',
        post_text='Can you figure out what shape the top brick should be?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post29 = Post(
        user_id=15,
        post_text='I put american cheese and ketchup on bread. 30 seconds in the microwave. A cup of water on the side. This is my daily breakfast.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post30 = Post(
        user_id=16,
        post_title='LEMON!!!!',
        imageURL='https://sallysbakingaddiction.com/wp-content/uploads/2019/02/lemon-bars-2-1024x1536.jpg',
        post_text='I have no clue why lemon desserts aren\'t more popular! They are so GOOD!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post31 = Post(
        user_id=18,
        post_title='Updates Day 2',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Yep. There is still snow here.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post32 = Post(
        user_id=3,
        post_title='I found another cute cat!',
        imageURL='https://cdn-raw.modrinth.com/data/8yMHBbeg/images/7d98084d1faa367098bcb23541106f3ef4464a36.png',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post33 = Post(
        user_id=4,
        post_text='The Mario Movie was surprisingly good! When the cast was revealed a while ago I was skeptical, but everyone did a pretty good job!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post34 = Post(
        user_id=13,
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Altocumulus.jpg/220px-Altocumulus.jpg',
        post_text='Altocumulus is this type of cloud. They usually appear as layers of patches of clouds.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post35 = Post(
        user_id=14,
        post_title='Can YOU solve THIS wAcKy puzzle?',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/250px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png',
        post_text='Can you figure out what the top right box\'s top right number will be?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post36 = Post(
        user_id=14,
        post_title='Can YOU solve THIS wAcKy puzzle?',
        imageURL='https://images.squarespace-cdn.com/content/v1/59cd7ae080bd5ec31d660af8/1561149738751-7DCKAZXXRM1L6YUGA5W8/30th+Disc.jpg.jpg?format=750w',
        post_text='Can you figure out what the last pattern should look like?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post37 = Post(
        user_id=14,
        post_title='Can YOU solve THIS wAcKy puzzle?',
        imageURL='https://images.ctfassets.net/cnu0m8re1exe/4kpEi9YNY7uImHR1qxXtI1/b4a8f56a32b63215391cc104f2d83e6c/zodiac.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
        post_text='Can you figure out what the secret message is?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post38 = Post(
        user_id=18,
        post_title='Updates Day 3',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Yep. There is still snow here.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post39 = Post(
        user_id=18,
        post_title='Updates Day 4',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Yep. There is still snow here.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post40 = Post(
        user_id=16,
        post_title='Lovely little cookies!!',
        imageURL='https://preppykitchen.com/wp-content/uploads/2019/06/Shortbread-cookies-Feature-2.jpg',
        post_text='Wow. Shortbread cookies are SO simple to make! They are incredible!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post41 = Post(
        user_id=18,
        post_title='Updates Day 5',
        imageURL='https://images.ctfassets.net/i04syw39vv9p/p4sZsKg8iTG5oyVJx0Dah/d27fba707cd9b81fa822f5332b293b3e/val-beck_3420.jpeg?w=1200&h=800&q=70&fit=fill&fm=jpg',
        post_text='I want to fight a polar bear.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post42 = Post(
        user_id=4,
        post_text='I just finished Puss In Boots 2 and WOW! How on earth did take a Puss In Boots and turn it into such an incredible movie!? It was so good that it got a higher audience rating than Avatar 2! How did they do that!?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post43 = Post(
        user_id=4,
        post_title='Fun Fact!',
        imageURL='https://media.sidefx.com/uploads/article/toy-story-4/houdini_cobweb.jpg',
        post_text='In Toy Story 4, there is an antique shop that is covered with spider webs. Pixar actually created AI spiders to simulate realistic web placements!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post44 = Post(
        user_id=4,
        post_text='Just watched The Thing (1982) after being told to watch it by my dad and it really is surprisingly good! It\'s a shame that the movie flopped. In my opinion it\'s because it was released after ET, and people weren\'t expecting an alien movie to be a horror. Regardless, I highly recommend the film.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post45 = Post(
        user_id=18,
        post_title='Updates Day 6',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Yep. There is still snow here.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post46 = Post(
        user_id=18,
        post_title='Updates Day 7',
        imageURL='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/AntarcticaDomeCSnow.jpg/220px-AntarcticaDomeCSnow.jpg',
        post_text='Yep. There is still snow here.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post47 = Post(
        user_id=20,
        post_text='We here at Target would like to thank you all for shopping with us. While our logo is a literal bright red target, we ask that our customers to not shoot projectiles at our target signs.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post48 = Post(
        user_id=7,
        post_title='Animal Crossing New Horizons',
        imageURL='https://www.cnet.com/a/img/resize/9ac3a16acf6b11b560d4418875df7c5a1455256f/hub/2021/11/04/76595d39-7ae3-4f96-bd6d-c85de01baf64/animal.jpg?auto=webp&fit=crop&height=236&width=420',
        post_text='Such a relaxing game. This is so much better than space invaders.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post49 = Post(
        user_id=7,
        imageURL='https://www.cnet.com/a/img/resize/b23bd340493be54ec31cd711673dd42c45770a60/hub/2021/10/15/943824f9-626d-4df5-891c-bdecefc6d969/new-horizons-the-roost.jpg?auto=webp&width=768',
        post_text='Got the coffee shop!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    post50 = Post(
        user_id=2,
        post_title='Look at this view!',
        imageURL='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f0/9b/c5/view-from-bears-hump.jpg?w=1000&h=-1&s=1',
        post_text='Wow! It was a long hike but was the view worth it? Yep. Absolutely!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )

    posts = [post1, post2, post3, post4, post5,
             post6, post7, post8, post9, post10,
             post11, post12, post13, post14, post15,
             post16, post17, post18, post19, post20,
             post21, post22, post23, post24, post25,
             post26, post27, post28, post29, post30,
             post31, post32, post33, post34, post35,
             post36, post37, post38, post39, post40,
             post41, post42, post43, post44, post45,
             post46, post47, post48, post49, post50]

    add_posts = [db.session.add(post) for post in posts]

    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
