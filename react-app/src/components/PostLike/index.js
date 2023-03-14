import React, { useState } from "react";
import "./PostLike.css";

function PostLike({ info }) {
    const [like, session] = info;
    const currUserFollowings = session?.user?.followings

    const handleFollow = () => {
        if (!session?.user){
            console.log("You need to be logged in to test this feature!")
        } else {
            console.log("Follow button is working! Curr user id and like user id: ", session?.user?.id, like.id)
        }
    }

    const handleUnfollow = () => {
        console.log("Unfollow button is working! Curr user id and like user id: ", session?.user?.id, like.id)
    }

    return (
        <>
            <div className="user-like-info">
                <img className="post-like-user-image" src={like?.profile_picture} alt="user like"></img>
                <div className="post-like-user-username">{like?.username}</div>
            </div>
            {false ?
                <div className="unfollow-button" onClick={handleUnfollow}>
                    Unfollow
                </div>
                :
                <div className="follow-button" onClick={handleFollow}>
                    Follow
                </div>
            }
        </>
    )
}

export default PostLike
