import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowers } from "../../store/user";
import { followUnfollowUser } from "../../store/session";
import './Navigation.css';
import './Follower.css';

export default function UserFollower({ userId }) {
    const dispatch = useDispatch();
    const followers = useSelector(state => state.user.followers)
    const session = useSelector(state => state.session)

    useEffect(() => {
        dispatch(getUserFollowers(userId))
    }, [dispatch, userId])

    const isFollowing = (follower) => {
        for (const following of session?.user?.followings) {
            if (following?.id === follower?.id) {
                return true;
            }
        }
        return false
    }

    const SingleFollower = ({ follower, idx }) => {
        const [followed, setFollowed] = useState(isFollowing(follower));
        const handleFollowButton = (target_user_id) => {
            if (session?.user) {
                setFollowed(!followed);
                dispatch(followUnfollowUser(target_user_id, userId))
            }
        };

        return (
            <div className="single-follower">
                <div className="single-follower-user-info">
                    <img className="user-follow-image" src={follower?.profile_picture} alt="following img" />
                    <span className="user-username">{follower?.username}</span>
                </div>
                <span className={`follow-user-button ${(follower?.username === session?.user?.username) && "hidden"}`}>
                    <div className="follow-button-container">
                        <span className="follow-user-button" onClick={() => handleFollowButton(follower.id)}>{followed ? "Unfollow" : "Follow"}</span>
                    </div>
                </span>
            </div>
        )
    }

    return (
        <div id="followers-modal">
            <h2 id="follower-modal-prompt">
                {followers && followers.length} Followers
            </h2>
            <div id="followers-container">
                {(followers && followers.length) ? followers.map((follower, idx) => (
                    <SingleFollower follower={follower} key={idx} />
                ))
            :
            <div className="no-followers-message">
                Looks a little empty here...
            </div>
            }
            </div>
        </div>
    )
}
