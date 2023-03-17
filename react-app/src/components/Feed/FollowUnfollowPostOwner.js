import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser } from "../../store/session";
import "./Feed.css";


export default function FollowUnfollowPostOwner({ post, session }) {
    const dispatch = useDispatch();
    const currUserId = session?.user?.id
    const followings = useSelector(state => state.session?.user?.followings.map(following => following.id))
    // console.log(followings)
    // console.log(post?.user?.id)
    const [followed, setFollowed] = useState(followings.includes(post?.user?.id));
    console.log(followed)

    useEffect(() => {
        setFollowed(followings.includes(post?.user?.id))
    }, [session])


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
            <span className="user-username">{post.user?.username}</span>
            <span className={`follow-user-button ${(post.user?.username === session?.user?.username) && "hidden"}`}>
                <div className="follow-button-container">
                    <span className="follow-user-button" onClick={() => handleFollowButton(post?.user?.id)}>{followed ? "Unfollow" : "Follow"}</span>
                </div>
            </span>
        </div>
    )
}
