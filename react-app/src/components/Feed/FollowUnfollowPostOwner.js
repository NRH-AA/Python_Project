import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { followUnfollowUser } from "../../store/user";
import "./Feed.css";


export default function FollowUnfollowPostOwner({ post, session }) {
    let followedStr = false
    const dispatch = useDispatch();
    const currUserId = session.user?.id
    const followerUserIdList = post.user?.followers.map(follower => follower.id)
    if (currUserId in followerUserIdList) followedStr = true
    const [followed, setFollowed] = useState(followedStr);

    const unfinishedAlert = () => {
        window.alert("Sorry, this feature is not functional.")
    }

    const handleFollowButton = (target_user_id) => {
        if (session?.user) {
            setFollowed(!followed);
            dispatch(followUnfollowUser(target_user_id, currUserId))
        } else {
            console.log("You need to belogged in to test that feature!")
        }
    };
    return (
        <div className="post-user">
            <span className="user-username" onClick={unfinishedAlert}>{post.user?.username}</span>
            <span className={`follow-user-button ${(post.user?.username === session?.user?.username) && "hidden"}`}>
                <div className="follow-button-container">
                    <span className="follow-user-button" onClick={() => handleFollowButton(post.user.id)}>{followed ? "Unfollow" : "Follow"}</span>
                </div>
            </span>
        </div>
    )
}
