from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    user_id = IntegerField("UserID")
    comment = StringField("Comment", validators=[DataRequired()])
