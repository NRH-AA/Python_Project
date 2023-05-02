// constants
const CREATE_POST = "/posts/new";
const DELETE_POST = "/posts/:postId";
const UPDATE_POST = "/posts/:postId/edit";
const READ_POSTS = "/posts";
const READ_POST = "/posts/:postId";
const LIKE_POST = "/posts/:postId/likes"

export const postSearchPosts = (searchText, searchType) => async dispatch => {
    const res = await fetch('/api/posts/search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            searchText,
            searchType
        })
    })

    if (res.ok) {
        const posts = await res.json();
        dispatch(readPosts(posts))

        return posts
    }
}


export const createPosts = (post) => ({
    type: CREATE_POST,
    payload: post
})

export const createPost = (post, userId) => async (dispatch) => {
    const { post_title, imageURL, post_text } = post
    const data = await fetch(`/api/users/${userId}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_title,
            imageURL,
            post_text,
        })
    })
    if (data.ok) {
        const response = await data.json()
        dispatch(createPosts(response))
        return response
    }
    return data;
}

export const deletePosts = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const deletePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
    })
    dispatch(deletePosts(id));
    dispatch(getPosts())
    return response
}

export const updatePosts = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}

export const updatePost = (id, postDetails) => async (dispatch) => {
    const { post_title, imageURL, post_text } = postDetails
    const data = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            post_title,
            imageURL,
            post_text
        }),
    });
    if (data.ok) {
        const response = await data.json();
        dispatch(updatePosts(response));
        return response;
    };
    return data;
    // else if (response.status < 500) {
    //     const data = await response.json();
    //     if (data.errors) {
    //         return data.errors;
    //     }
    // } else {
    //     return ["An error occurred. Please try again."];
    // }
}

export const readPosts = (posts) => ({
    type: READ_POSTS,
    payload: posts
})

export const getPosts = () => async (dispatch) => {
    const data = await fetch("/api/posts")
    if (data.ok) {
        const response = await data.json()
        dispatch(readPosts(response))
        return response
    }
    // else if (response.status < 500) {
    //     const data = await response.json();
    //     if (data.errors) {
    //         return data.errors;
    //     }
    // } else {
    //     return ["An error occurred. Please try again."];
    // }
}

//get user liked posts
export const getUserLikedPosts = (userId) => async (dispatch) => {
    const data = await fetch(`/api/users/${userId}/liked-posts`)
    if (data.ok) {
        const response = await data.json()
        dispatch(readPosts(response))
        return response
    }
}

export const readPost = (post) => ({
    type: READ_POST,
    payload: post
})

export const getUser = (userId) => async (dispatch) => {
    const data = await fetch(`/api`)

    if (data.ok) {
        const posts = await data.json()
        dispatch(readPost(posts))
        return posts
    }
    return data
}

export const createLike = (post) => {
    return {
        type: LIKE_POST,
        post
    }
}

export const likePost = (user_id, postId) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/likes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user_id,
            postId
        })
    })

    if (res.ok) {
        const post = await res.json();
        dispatch(createLike(post))
    }
}

export const createCommentThunk = (postId, user_id, comment) => async (dispatch) => {
    const res = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id,
            comment
        })
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(getPosts());
        return data;
    };
    return res;
};

export const updateCommentThunk = (commentId, comment) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment
        })
    });

    if (res.ok) {
        dispatch(getPosts());
    };
    return res;
};

export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    });

    if (res.ok) {
        dispatch(getPosts());
    };
    return res;
};



const initialState = { allPosts: {}, singlePost: {} }

export default function postReducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case READ_POSTS:
            const variable = action.payload.reduce((acc, post) => {
                acc[post.id] = post
                return acc
            }, {})
            newState.allPosts = variable
            return newState

        case READ_POST:
            newState.singlePost = action.payload
            return newState

        case CREATE_POST:
            newState.allPosts[action.payload.id] = action.payload
            return newState

        case DELETE_POST:
            delete newState[action.payload.id]
            return newState

        case UPDATE_POST:
            newState.allPosts[action.payload.id] = action.payload
            return newState

        case LIKE_POST:
            newState.allPosts[action.post.id] = action.post
            return newState

        default:
            return state;
    };
}
