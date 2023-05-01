import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser } from "../../store/session";
import './Navigation.css';
import '../Feed/Feed.css';

export default function UserFollowing({ userId }) {
    const dispatch = useDispatch();
    const followings = useSelector(state => state.session?.user?.followings)
    const session = useSelector(state => state.session)

    const SingleFollowing = ({ following, idx }) => {
        const [followed, setFollowed] = useState(true);
        const handleFollowButton = (target_user_id) => {
            if (session?.user) {
                setFollowed(!followed);
                dispatch(followUnfollowUser(target_user_id, userId))
            }
        };

        return (
            <div className="single-following">
                <div className="single-following-user-info">
                    <img className="user-follow-image" src={following?.profile_picture} alt="following img" />
                    <span className="user-username">{following?.username}</span>
                </div>
                <span className={`follow-user-button ${(following?.username === session?.user?.username) && "hidden"}`}>
                    <div className="follow-button-container">
                        <span className="follow-user-button" onClick={() => handleFollowButton(following.id)}>{followed ? "Unfollow" : "Follow"}</span>
                    </div>
                </span>
            </div>
        )
    }


    return (
        <div id="following-modal">
            <h2 id="following-modal-prompt">
                {followings && followings.length} Following
            </h2>
            <div id="followings-container">
                {(followings && followings.length) ? followings.map((following, idx) => (
                    <SingleFollowing following={following} key={idx} />
                ))
                    :
                    <div className="no-followings-message">
                        Looks a little empty here...
                    </div>
                }
            </div>
        </div>
    )
}
