const READ_USERS = "/user"
const READ_USER = "/user/:userId"
const READ_USER_FOLLOWERS = "/user/:userId/followers"
const READ_USER_FOLLOWINGS = "/user/:userId/followings"


export const getUser = () => async (dispatch) => {
    const data = await fetch("/api")
    if (data.ok) {
        const response = await data.Json()
        dispatch(readUser(response))
        return response
        // } else if (response.status < 500) {
        //     const data = await response.json();
        //     if (data.errors) {
        //         return data.errors;
        //     }
        // } else {
        //     return ["An error occurred. Please try again."];
    }
}



export const getUserById = (userId) => async (dispatch) => {
    const data = await fetch(`/api/${userId}`)

    const user = await data.json()

    dispatch(readUser(user))
    return user
}
export const readUsers = (user) => ({
    type: READ_USERS,
    payload: user
})

export const readUser = (user) => ({
    type: READ_USER,
    payload: user
})

export const readUserFollowers = (followers) => ({
    type: READ_USER_FOLLOWERS,
    payload: followers
})

export const readUserFollowings = (followings) => ({
    type: READ_USER_FOLLOWINGS,
    payload: followings
})

export const getUserFollowers = (userId) => async (dispatch) => {
    const data = await fetch(`/api/users/${userId}/followers`)

    const followers = await data.json()

    dispatch(readUserFollowers(followers))
    return followers
}

export const getUserFollowings = (userId) => async (dispatch) => {
    const data = await fetch(`/api/users/${userId}/followings`)

    const followings = await data.json()

    dispatch(readUserFollowings(followings))
    return followings
}

export const followUnfollowUser = (user_id, curr_user_id) => async (dispatch) => {
    const res = await fetch(`/api/users/${user_id}/follow`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            curr_user_id
        })
    })

    if (res.ok) {
        const curr_user = await res.json();
        dispatch(getUserFollowers(curr_user.id))
    }
}


let initialState = { allUsers: {}, singleUser: {} }
export default function userReducer(state = initialState, action) {
    let newState = {}
    switch (action.type) {
        case READ_USERS:
            newState = { ...state, allUsers: {} }

            action.payload.forEach(user => newState.allUsers[user.id] = user)
            return newState

        case READ_USER:
            newState = { ...state, singleUser: {} };
            newState.singleUser = action.payload
            return newState

        case READ_USER_FOLLOWERS:
            newState = { ...state };
            newState.followers = action.payload["followers"]
            return newState

        case READ_USER_FOLLOWINGS:
            newState = { ...state };
            newState.followings = action.payload["followings"]
            return newState

        default:
            return state;
    };

}
