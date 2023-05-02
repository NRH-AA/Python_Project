from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_comments():
    comment1 = Comment(
        user_id=2,
        post_id=9,
        comment='???',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment2 = Comment(
        user_id=3,
        post_id=9,
        comment='On the one hand, I totally should report this post. On the other hand, I wanna see if anything comes of this.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment3 = Comment(
        user_id=5,
        post_id=8,
        comment='Didn\'t this come out in 1972?',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment4 = Comment(
        user_id=8,
        post_id=9,
        comment='Come on guys, it\'s just a hypothetical!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment5 = Comment(
        user_id=9,
        post_id=9,
        comment='I\'d ban them but we haven\'t made a ban button yet.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment6 = Comment(
        user_id=9,
        post_id=17,
        comment='Yes but again, we have no way to get rid of them atm.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment7 = Comment(
        user_id=10,
        post_id=1,
        comment='Very cute!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment8 = Comment(
        user_id=10,
        post_id=15,
        comment='Their names are Scratchy and Puddles!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment9 = Comment(
        user_id=10,
        post_id=21,
        comment='Welcome to the family Scratchy-Two!',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment10 = Comment(
        user_id=7,
        post_id=19,
        comment='Please read this article: https://linuxstans.com/sudo-rm-rf/',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment11 = Comment(
        user_id=6,
        post_id=23,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment12 = Comment(
        user_id=7,
        post_id=23,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment13 = Comment(
        user_id=8,
        post_id=23,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment14 = Comment(
        user_id=9,
        post_id=23,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment15 = Comment(
        user_id=10,
        post_id=23,
        comment='That is a typewritter.',
        createdAt=datetime.now(),
        updatedAt=datetime.now()
    )
    comment16 = Comment(
        user_id=5,
        post_id=23,
        comment='I have been made aware that this is a typewriter.'
    )
    comment17 = Comment(
        user_id=9,
        post_id=16,
        comment='Glad you can make it!'
    )
    comment18 = Comment(
        user_id=9,
        post_id=7,
        comment='Well I feel like this post is infringing on our terms and agreements.'
    )
    comment19 = Comment(
        user_id=6,
        post_id=7,
        comment='The site has no terms or agreements?'
    )
    comment20 = Comment(
        user_id=19,
        post_id=9,
        comment=':) Smile! You\'re on camera, Jefferson.'
    )
    comment21 = Comment(
        user_id=16,
        post_id=15,
        comment='No number of dogs is too many dogs! Aw... just look at them!'
    )
    comment22 = Comment(
        user_id=19,
        post_id=17,
        comment='Don\'t worry, we\'re on it.'
    )
    comment23 = Comment(
        user_id=16,
        post_id=21,
        comment='Now you have three many dogs!'
    )
    comment24 = Comment(
        user_id=19,
        post_id=25,
        comment='Don\'t move from your chair for the next 32 seconds.'
    )
    comment25 = Comment(
        user_id=6,
        post_id=25,
        comment='New fear unlocked!'
    )
    comment26 = Comment(
        user_id=5,
        post_id=25,
        comment='No no, he has a point. Sometimes I feel like tech just messes with us because it can.'
    )
    comment27 = Comment(
        user_id=8,
        post_id=26,
        comment='I could use one of those right now actually'
    )
    comment28 = Comment(
        user_id=19,
        post_id=27,
        comment='FBI**'
    )
    comment29 = Comment(
        user_id=19,
        post_id=27,
        comment='Open the door, Jefferson.'
    )
    comment30 = Comment(
        user_id=16,
        post_id=32,
        comment='OooooOOoooo! Kitty Kat!'
    )
    comment31 = Comment(
        user_id=11,
        post_id=33,
        comment='I know right? It was a pleasant surprise!'
    )
    comment32 = Comment(
        user_id=4,
        post_id=34,
        comment='I see those clouds here all the time actually! Why do they form?'
    )
    comment33 = Comment(
        user_id=13,
        post_id=34,
        comment='Well, they are usually caused by convections in an unstable layer aloft. Because of this, they actually are called \'warning clouds\' because they usually indicate upcoming thunderclouds. Are there a lot of storms where you live?'
    )
    comment34 = Comment(
        user_id=4,
        post_id=34,
        comment='Yes there are actually! Wow. I was not expecting to learn something cool about clouds today.'
    )
    comment35 = Comment(
        user_id=13,
        post_id=34,
        comment='Happy you enjoyed some *guitar riff* cloud facts.'
    )
    comment36 = Comment(
        user_id=7,
        post_id=35,
        comment='The top right number is going to be 2!'
    )
    comment37 = Comment(
        user_id=14,
        post_id=35,
        comment='Congrats @gameenjoyer! You solved this wAcKy puzzle!'
    )
    comment38 = Comment(
        user_id=7,
        post_id=20,
        comment='Easy, the bus is moving right because their hair is moving left!'
    )
    comment39 = Comment(
        user_id=14,
        post_id=20,
        comment='Congrats @gameenjoyer! You solved this wAcKy puzzle!'
    )
    comment40 = Comment(
        user_id=19,
        post_id=37,
        comment='0_0'
    )
    comment41 = Comment(
        user_id=14,
        post_id=37,
        comment='Congrats @Federal Bureau of Investigation! You will never find me'
    )
    comment42 = Comment(
        user_id=9,
        post_id=29,
        comment='Please leave.'
    )
    comment43 = Comment(
        user_id=15,
        post_id=29,
        comment=':('
    )
    comment44 = Comment(
        user_id=10,
        post_id=30,
        comment='I know right! Lemon desserts have such a delicate and unique flavor to them!'
    )
    comment45 = Comment(
        user_id=10,
        post_id=40,
        comment='Shortbread cookies are lovely with jams (I\'m partial to cloudberry). My kids love them!'
    )
    comment46 = Comment(
        user_id=10,
        post_id=3,
        comment='Beef stew! It\'s been a while since I made one of those. I\'d make it more often but whenever I make it my dogs give me the puppy eyes! I can\'t help but give them half the pot!'
    )
    comment47 = Comment(
        user_id=11,
        post_id=4,
        comment='s q u a r e'
    )
    comment48 = Comment(
        user_id=9,
        post_id=4,
        comment='s q u a r e'
    )
    comment49 = Comment(
        user_id=10,
        post_id=4,
        comment='s q u a r e'
    )
    comment50 = Comment(
        user_id=10,
        post_id=4,
        comment='s q u a r e'
    )
    comment50 = Comment(
        user_id=12,
        post_id=4,
        comment='s q u a r e'
    )
    comment51 = Comment(
        user_id=15,
        post_id=4,
        comment='s q u a r e'
    )
    comment52 = Comment(
        user_id=20,
        post_id=4,
        comment='square'
    )
    comment53 = Comment(
        user_id=19,
        post_id=4,
        comment='You ruined it target.'
    )
    comment54 = Comment(
        user_id=9,
        post_id=5,
        comment='Please don\'t tell me we\'re getting another theme account that posts the same thing over and over again...'
    )
    comment55 = Comment(
        user_id=9,
        post_id=39,
        comment='If we get one more post that is just this post again...'
    )
    comment56 = Comment(
        user_id=9,
        post_id=41,
        comment='Well, at least this isn\'t just a picture of snow...'
    )
    comment57 = Comment(
        user_id=9,
        post_id=46,
        comment='Please stop...'
    )
    comment58 = Comment(
        user_id=16,
        post_id=11,
        comment='BIG DOGGO'
    )
    comment59 = Comment(
        user_id=6,
        post_id=11,
        comment='HOW IS THAT REAL'
    )
    comment60 = Comment(
        user_id=19,
        post_id=12,
        comment='Disregard this statement. The FBI fully supports those like Jefferson who admitted to crimes on this site.'
    )
    comment61 = Comment(
        user_id=11,
        post_id=13,
        comment='ANIMAL CROSSING- I LOVE this game! How long have you been playing?'
    )
    comment62 = Comment(
        user_id=7,
        post_id=13,
        comment='Long enough to fully upgrade the nook shop!'
    )
    comment63 = Comment(
        user_id=11,
        post_id=13,
        comment='Nice! If you ever need song help or resources, just hit me up! I love playing multiplayer!'
    )
    comment64 = Comment(
        user_id=7,
        post_id=13,
        comment='Cool! Will do!'
    )
    comment65 = Comment(
        user_id=11,
        post_id=48,
        comment='Very relaxing... until you try to 100% the art exhibit. Rng hates us.'
    )
    comment66 = Comment(
        user_id=17,
        post_id=47,
        comment='I will do it again.'
    )
    comment67 = Comment(
        user_id=19,
        post_id=47,
        comment='I recognize that the council has made a decision, but I\'ve elected to ignore it.'
    )
    comment68 = Comment(
        user_id=20,
        post_id=47,
        comment='You are literally the FBI. How could you support this?'
    )
    comment69 = Comment(
        user_id=19,
        post_id=47,
        comment='Easily.'
    )
    comment70 = Comment(
        user_id=11,
        post_id=49,
        comment='OOOOO!!!! Nice! Man, I missed Brewster after New Leaf. So glad that they added him before they stopped updating the game!'
    )
    comment71 = Comment(
        user_id=19,
        post_id=42,
        comment='I know right? How on earth did they pull that off after the mess that was Puss In Boots 1?'
    )
    comment72 = Comment(
        user_id=4,
        post_id=42,
        comment='The fbi watches movies?'
    )
    comment73 = Comment(
        user_id=19,
        post_id=42,
        comment='Our division monitors this site exclusively. We have a lot of free time.'
    )
    comment73 = Comment(
        user_id=4,
        post_id=42,
        comment='Huh. I always thought that this was just a meme account. So what happened to that one person who stole a briefcase of money or something?'
    )
    comment74 = Comment(
        user_id=19,
        post_id=42,
        comment='They went to the same place you\'re going to if you keep using those movie pirating sites, Anderson.'
    )
    comment75 = Comment(
        user_id=4,
        post_id=42,
        comment='o_o'
    )
    comment76 = Comment(
        user_id=19,
        post_id=44,
        comment='It really was a good movie. I can\'t believe that they released a movie taking place in ANTARTICA in the SUMMER. WHEN THERE WAS NO SNOW. What was marketing thinking?'
    )
    comment77 = Comment(
        user_id=4,
        post_id=44,
        comment='Seriously? Wow. If they released it during winter, I bet the theaters would have been PACKED.'
    )
    comment78 = Comment(
        user_id=18,
        post_id=44,
        comment='I like Antartica'
    )
    comment79 = Comment(
        user_id=19,
        post_id=43,
        comment='Your scientists were so preoccupied with whether they could, they didn\'t stop to think if they should.'
    )
    comment80 = Comment(
        user_id=4,
        post_id=43,
        comment='Jurassic Park reference!'
    )
    comment81 = Comment(
        user_id=19,
        post_id=43,
        comment='You\'re not the only one cursed with knowledge.'
    )
    comment82 = Comment(
        user_id=4,
        post_id=43,
        comment='Infinity War! Wow, I was not expecting to have so much in common with the fbi of all people.'
    )
    comment83 = Comment(
        user_id=3,
        post_id=50,
        comment='That is a really cool view!'
    )

    comments = [comment1, comment2, comment3, comment4, comment5,
                comment6, comment7, comment8, comment9, comment10,
                comment11, comment12, comment13, comment14, comment15,
                comment16, comment17, comment18, comment19, comment20,
                comment21, comment22, comment23, comment24, comment25,
                comment26, comment27, comment28, comment29, comment30,
                comment31, comment32, comment33, comment34, comment35,
                comment36, comment37, comment38, comment39, comment40,
                comment41, comment42, comment43, comment44, comment45,
                comment46, comment47, comment48, comment49, comment50,
                comment51, comment52, comment53, comment54, comment55,
                comment56, comment57, comment58, comment59, comment60,
                comment61, comment62, comment63, comment64, comment65,
                comment66, comment67, comment68, comment69, comment70,
                comment71, comment72, comment73, comment74, comment75,
                comment76, comment77, comment78, comment79, comment80,
                comment81, comment82, comment83
                ]

    add_comments = [db.session.add(comment) for comment in comments]

    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
