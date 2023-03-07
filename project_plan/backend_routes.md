# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Posts

* A logged in user can create a post
* A logged in user can update and delete their own post
* Users can view posts

  * `GET '/api/posts'`
  * `POST '/api/posts'`
  * `PUT '/api/posts/:postId'`
  * `DELETE '/api/posts/:postId'`

## Likes

* A logged in user can like or unlike a post with visible confirmation without causing a refresh/redirect.

  * `GET '/api/posts/:postId/likes'`
  * `POST '/api/posts/:postId/likes'`
  * `DELETE '/api/likes/:likesid'`

## Comments

* A logged in user may delete one of their own comments, removing it from the list of visible comments without causing a refresh/redirect.

  * `GET '/api/posts/:postId/comment'`
  * `POST '/api/posts/:postId/comment'`
  * `DELETE '/api/comments/:commentid'`

## Follows

* A logged in user can follow and unfollow other users
* A logged in user can see their followers

  * `POST '/api/users/:userId/followers'`
  * `DELETE '/api/users/:userId/followers'`
