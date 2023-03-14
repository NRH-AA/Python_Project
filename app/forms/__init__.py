from .login_form import LoginForm
from .signup_form import SignUpForm
from .post_form import PostForm
from .comment_form import CommentForm


# FORM VALIDATIONS #

# Signup:
#   - Username exists
#   - Username >= 4 <= 20
#   - Email exists
#   - Email >= 4 <= 50
#   - Password >= 6

# Login:
#   - Email >= 4 <= 50
#   - Password >= 6

# Post:
#   - Title OR text must have at least one character

# Comment:
#   - Comment DataRequired
