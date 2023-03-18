import React from "react";
import "./PostLike.css";
import FollowUnfollowPostOwner from '../Feed/FollowUnfollowPostOwner'

function PostLike({ info }) {
    const [like, session] = info;
    //console.log(like)
    const handleFollow = () => {
        if (!session?.user) {
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
                <div id="user-like-info">   
                    <img className="post-like-user-image" src={like?.profile_picture} alt="user like"></img>
                    <p className="post-like-user-username">{like?.username}</p>
                </div>
                <FollowUnfollowPostOwner targetUser={like} session={session} />
            </div>

        </>
    )
}

export default PostLike
