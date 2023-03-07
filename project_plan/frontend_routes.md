# User-facing routes

## `/login`

### Log in page

This page displays a log in form

* `GET /login`
* `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

* `GET /signup`
* `POST /signup`

## `/`

This page displays the most popular and recent posts, as well as a navigation bar with login/signup or logout buttons.  Logged in users can like the posts on this page.

* `GET /`

## `/posts`

This page displays a form with which a logged in user can craft a new post, as well as a navigation bar with login/signup or logout buttons.

* `POST /posts`

## `/posts/<id>`

This page displays individual posts with associated comments and likes, as well as a navigation bar with login/signup or logout buttons.  If the logged in user owns the post, this page also displays an update and delete button.  Logged in users can like the tweet and comment on this page, and can post comment.  The logged in owners of those comment can update or delete them.

* `GET /posts/:id`
* `POST /posts/:id/fauxlikes`
* `DELETE /posts/:id/fauxlikes`
* `POST /posts/:id/comment`
* `DELETE /posts/:id/comment`
