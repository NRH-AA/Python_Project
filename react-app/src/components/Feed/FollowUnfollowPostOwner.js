import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser } from "../../store/session";
import "./Feed.css";


export default function FollowUnfollowPostOwner({ targetUser, session }) {
    const dispatch = useDispatch();
    const currUserId = session?.user?.id
    const followings = useSelector(state => state.session?.user?.followings.map(following => following.id))
    const followingFlag = followings?.includes(targetUser?.id)
    const [followed, setFollowed] = useState(followingFlag);

    useEffect(() => {
        setFollowed(followingFlag)
    }, [session, followingFlag])

    const unfinishedAlert = () => {
        window.alert("Sorry, this feature is not functional.")
    }

    const handleFollowButton = (targetUserId) => {
        if (session?.user) {
            setFollowed(!followed);
            dispatch(followUnfollowUser(targetUserId, currUserId))
        } else {
            console.log("You need to belogged in to test that feature!")
        }
    };
    return (
        <div className="post-user">
            {/* <span className="user-username" onClick={unfinishedAlert}>{targetUser?.username}</span> */}
            <span className={`follow-user-button ${(!session.user || (targetUser?.username === session?.user?.username)) && "hidden"}`}>
                <div className="follow-button-container">
                    <span className="follow-user-button" onClick={() => handleFollowButton(targetUser.id)}>{followed ? "Unfollow" : "Follow"}</span>
                </div>
            </span>
        </div>
    );
};
