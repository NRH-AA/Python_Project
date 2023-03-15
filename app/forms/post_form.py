from flask_wtf import FlaskForm
from wtforms import StringField

class PostForm(FlaskForm):
    post_title = StringField("Title")
    post_text = StringField("Text")
    imageURL = StringField("Image")
