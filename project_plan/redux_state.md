# Example Redux State

```javascript
{
   posts: {
        allPosts:{
            1: {
                id: 1,
                user_id: 1,
                post: "Demo text"
                num_likes:100
                comments:{
                    10:{
                        id: 10,
                        user_id: 2,
                        comment:"Demo comment"
                    },
                }
            },
        },
        orderedPostList:[7,5,4,3,2,1].
   },
   user: {
        id: 2,
        user_name:"test_user",
        posts: {
            2: {
                id: 1,
                user_id: 1,
                post: "Demo text"
                num_likes:100
            },
        },

   },
   session: {
      user: {
         id: 1,
         user_name:"demo_user",
         first_name: "Demo",
         last_name: "Test",
         email:"demo@user.io",
         followings:{
            3:{
                user_id:3,
                user_name:"testuser"
            },
         }
         followers:{
            4:{
                user_id:4,
                user_name:"fakeuser"
            },
         }
      }
   },
}
```
