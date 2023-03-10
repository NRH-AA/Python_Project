from flask_wtf import FlaskForm
from wtforms import StringField

class PostForm(FlaskForm):
    post_title = StringField("Title", validators=[])
    post_heading = StringField("Heading", validators=[])
    post_text = StringField("Text", validators=[])
