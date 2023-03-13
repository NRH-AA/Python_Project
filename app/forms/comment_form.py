from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField

class CommentForm(FlaskForm):
    user_id = IntegerField("UserID")
    comment = StringField("Comment", validators=[])
