// constants
const CREATE_POST = "/posts/new";
const DELETE_POST = "/posts/:postId";
const UPDATE_POST = "/posts/:postId/edit"
const READ_POSTS = "/posts"
const READ_POST = "/posts/:postId"

export const createPost = (post) => async (dispatch) => {
    //need to breakdown content of post from python query
    const data = await csrfFetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
// Need to add content of post from database
        })
    })
    if (data.ok) {
    const response = await data.Json()
    dispatch(createPosts(response))
    return response
    } else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}

export const createPosts = (post) =>({
    type: CREATE_POST,
    payload: post
})

export const deletePost = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: "DELETE",
    })
    dispatch(deletePosts(id));
    return response
}

export const deletePosts = (id) => {
    return{
        type:DELETE_POST,
        id
    }
}

export const updatePost = (id) => async (dispatch) => {
   // get data from post
    const data = await csrfFetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
    // info from post
        }),
    });
    if (data.ok) {
        const response = await data.Json()
        dispatch(updatePosts(response))
        return response
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ["An error occurred. Please try again."];
        }
    }
    

export const updatePosts = (post) =>({
    type: UPDATE_POST,
    payload: post
})

export const getPosts = () => async (dispatch) => {
    const data = await csrfFetch("/api/posts")
    if (data.ok) {
        const response = await data.Json()
        dispatch(readPosts(response))
        return response
        } else if (response.status < 500) {
            const data = await response.json();
            if (data.errors) {
                return data.errors;
            }
        } else {
            return ["An error occurred. Please try again."];
        }
    }

    export const getPost = (id) => async (dispatch) => {
        const data = await csrfFetch(`/api/posts/${id}`)
        
        const posts = await data.json()
       
        dispatch(readPost(spot))
        
    }
export const readPosts = (posts) => ({
    type: READ_POSTS, 
    payload: posts
})

export const readPost = (post) => ({
    type: READ_POST,
    payload: post
})



initialState = {allPosts:{}, singlePost:{}}
export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case READ_POSTS:
			newState = {...state, allPosts:{}}
               
                action.payload.forEach(post => newState.allPosts[post.id] = post)
                return newState 

        case READ_POST:
                    newState ={...state, singlePost: {} };
                   newState.singlePost = action.payload
                   return newState
   
        case CREATE_POST:
            newState = { allPosts:{ ...state.allPosts}}
           
           newState.allPosts[action.payload.id] = action.payload
           return newState

        case DELETE_POST:
            newState = {...state}
            delete newState[action.payload.id]

        case UPDATE_POST:
                newState = {...state, allPosts:{ ...state.allPosts}}
                newState.allPosts[action.payload.id] = action.payload
                return newState

            default:
                return state;  
    };

}
