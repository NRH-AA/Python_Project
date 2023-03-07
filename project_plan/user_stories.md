 # User Stories
 
 ## Posts

### Create Posts

* As a logged in user, I want to be able to make new Posts the other users can see and enjoy
  * From my user page I can use a button clearly marked in order to:
    * Write and submit a new Post,
    * So that I can share my thoughts and memes with my friends.

### Viewing Feed

* As a logged in _or_ logged out user, I want to be able to view a selection of the most popular posts.
  * When I'm on the `/` page:
    * I can view the ten most popular FauxTweets.
    * So that I can read and interact with the thoughts and memes of my friends.

* As a logged in _or_ logged out user, I want to be able to view a specific Post and its associated comments and see how many others have liked it.

  * When I'm on the `/posts/:postId` page:
    * I can view the content of the post, as well as the associated comments and see how many others have liked the post.
    * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the comment section.

### Updating Posts

* As a logged in user, I want to be able to edit my Posts by clicking an Edit button associated with the Post from my user profile page where it was submitted.
  * When I'm on the `/post/:postId` or `/users/:userId` pages:
    * I can click "Edit" to make permanent changes to posts I have posted.
    * So that I can fix any errors I make in my posts.

### Deleting Posts

* As a logged in user, I want to be able to delete my posts by clicking a Delete button associated with the Post from my user profile page where I submitted it. 
  * When I'm on the `/posts/:postId` or `/users/:userId` pages:
    * I can click "Delete" to permanently delete a post I have posted.
    * So that when I realize what I shared may have been innappropriate it is easily removed.

 ## Comments 

 ### Create Comments

* As a logged in user, I want to be able to make new comments the other users can see and respond to.
  * From the page the post is displayed I can use a button clearly marked in order to:
    * Write and submit a new comment,
    * So that I can share my thoughts regarding the post with others that enjoyed it.     

### Updating Comments

* As a logged in user, I want to be able to edit my comments by clicking an Edit button associated with the comment from the comment section of the post.
  * When I'm on the `/post/:postId` page:
    * I can click "Edit" to make permanent changes to comment I have posted.
    * So that I can correct any mistakes or update my opinion.

### Deleting Comments

* As a logged in user, I want to be able to delete my comments by clicking a Delete button associated with the comment from the comment section of the post. 
  * When I'm on the `/posts/:postId` page:
    * I can click "Delete" to permanently delete a comment I have posted.
    * So that when I realize what I shared may have been innappropriate it is easily removed.

### Viewing Comments

* As a logged in _or_ logged out user, I want to be able to view the comments others have left for the posts that have been submitted.
  * When I'm on the `/post/:postId` page:
    * I can view the comments left by others about the post.
    * So that I can read and interact with the thoughts and opinions of others.

 ## Likes

 ### Create Likes

* As a logged in user, I want to be able to like the posts others have submitted and add to the total number of likes for that post.
* From the page the post is displayed I can use a small button clearly marked whith a heart  in order to:
  * Add to the number of likes for the post so that the creator can see how many have enjoyed the post.
      
 ### Read Likes

* As a logged in or logged out user, I want to be able to see how many people have liked the post I am looking at.
* On the page displaying the post there is a heart or similiar icon with a number letting me know how many likes the post has.

### Deleting Likes

* As a logged in user, I want to be able to delete my likes by clicking a the same button that I did to like the post. 
  * When I'm on the `/posts/:postId` page:
      * I can click a small heart to remove my like from the total likes of the post.
      * So that if my opinion changes I can decide not to support that post any longer.
    
## Follows

### Create Follow

* As a logged in user, I want to be able to follow the user whos content I enjoy.
  * From the users profile page I want to use a button clearly marked "Follow" to:
    * Make sure I am aware of any new content created by that User.

### Read Follow
* As a logged in user, I want to be able to see that I am currently following a user from their profile page.
    *On their page the button I clicked to follow them will now have a small green check and change to the word "UnFollow" letting me know I am already following this user.

### Delete Follow
* As a logged in user, I want to be able to unfollow a user so that I no longer am shown their new content as they post it.
    * On their page the button I clicked to follow them I can click again to remove the follow.
    * This will remove the green check and change the button to the word "Follow" letting me know i have unfollowed that person.
    * I am able to click again if I choose to follow that person in the future and start seeing their content once again.