import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowings } from "../../store/user";
import './Navigation.css';

export default function UserFollowing({ userId }) {
    const dispatch = useDispatch();
    const followings = useSelector(state => state.user.followings)
    //console.log(followings)
    useEffect(() => {
        dispatch(getUserFollowings(userId))
    }, [dispatch, userId])



    return (
        <>
            <h2>
                Following Users
            </h2>
            {followings && followings.map((following, idx) => (
                <div>
                    <img className="user-follow-image" src={following.profile_picture} alt="following img"></img>
                    {following.username}
                </div>

            ))}
        </>
    )
}
