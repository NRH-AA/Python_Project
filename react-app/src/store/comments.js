const CREATE_COMMENT = "/comments/new";
const DELETE_COMMENT = "/comments/:commentId";
const UPDATE_COMMENT = "/comments/:commentId/edit"
const READ_COMMENTS = "/comments"
const READ_COMMENT = "/comments/:commentId"

export const createComment = (comment) => async (dispatch) => {
    //need to breakdown content of comment from python query
    const data = await csrfFetch("/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
// Need to add content of comment from database
        })
    })
    if (data.ok) {
    const response = await data.Json()
    dispatch(createComments(response))
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

export const createComments = (comment) =>({
    type: CREATE_COMMENT,
    payload: comment
})

export const deleteComment = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: "DELETE",
    })
    dispatch(deleteComments(id));
    return response
}

export const deleteComments = (id) => {
    return{
        type:DELETE_COMMENT,
        id
    }
}

export const updateComment = (id) => async (dispatch) => {
   // get data from comment
    const data = await csrfFetch(`/api/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify({
    // info from comment
        }),
    });
    if (data.ok) {
        const response = await data.Json()
        dispatch(updateComments(response))
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
    

export const updateComments = (comment) =>({
    type: UPDATE_COMMENT,
    payload: comment
})

export const getComments = () => async (dispatch) => {
    const data = await csrfFetch("/api/comments")
    if (data.ok) {
        const response = await data.Json()
        dispatch(readComments(response))
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

    export const getComment = (id) => async (dispatch) => {
        const data = await csrfFetch(`/api/comments/user/${id}`)
        
        const comments = await data.json()
       
        dispatch(readComment(spot))
        
    }
export const readComments = (comments) => ({
    type: READ_COMMENTS, 
    payload: comments
})

export const readComment = (comment) => ({
    type: READ_COMMENT,
    payload: comment
})



initialState = {allComments:{}, singleComment:{}}
export default function commentReducer(state = initialState, action) {
	switch (action.type) {
		case READ_COMMENTS:
			newState = {...state, allComments:{}}
               
                action.payload.forEach(comment => newState.allComments[comment.id] = comment)
                return newState 

        case READ_COMMENT:
                    newState ={...state, singleComment: {} };
                   newState.singleComment = action.payload
                   return newState
   
        case CREATE_COMMENT:
            newState = { allComments:{ ...state.allComments}}
           
           newState.allComments[action.payload.id] = action.payload
           return newState

        case DELETE_COMMENT:
            newState = {...state}
            delete newState[action.payload.id]

        case UPDATE_COMMENT:
                newState = {...state, allComments:{ ...state.allComments}}
                newState.allComments[action.payload.id] = action.payload
                return newState

            default:
                return state;  
    };

}
