import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getUserLikedPosts } from "../../store/user";
import './Navigation.css';

export default function UserLikedPosts({ userId }) {
    const dispatch = useDispatch();
    // const followings = useSelector(state => state.user.followings)
    // //console.log(followings)
    // useEffect(() => {
    //     dispatch(getUserFollowings(userId))
    // }, [dispatch, userId])



    return (
        <>
            <h2>
                Users Liked Posts
            </h2>
            {/* {followings && followings.map((following, idx) => (
                <div>
                    <img className="user-follow-image" src={following.profile_picture} alt="following img"></img>
                    {following.username}
                </div>

            ))} */}
        </>
    )
}
