# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Likes

* A logged in user can like or unlike a post with visible confirmation without causing a refresh/redirect.

  * `GET /api/posts/<postid>/likes`
  * `POST /api/posts/<postid>/likes`
  * `DELETE /api/likes/<likesid>`
  
## Comments

* A logged in user may delete one of their own comments, removing it from the list of visible comments without causing a refresh/redirect.

  * `GET /api/posts/<postid>/comment`
  * `POST /api/posts/<postid>/comment`
  * `DELETE /api/comments/<commentid>`
