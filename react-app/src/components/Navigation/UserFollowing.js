import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser } from "../../store/session";
import './Navigation.css';
import '../Feed/Feed.css';

export default function UserFollowing({ userId }) {
    const dispatch = useDispatch();
    const followings = useSelector(state => state.session?.user?.followings)
    const session = useSelector(state => state.session)

    const FollowingUser = ({ following, idx }) => {
        const [followed, setFollowed] = useState(true);
        const handleFollowButton = (target_user_id) => {
            if (session?.user) {
                setFollowed(!followed);
                //console.log(following)
                dispatch(followUnfollowUser(target_user_id, userId))
            } else {
                console.log("You need to belogged in to test that feature!")
            }
        };
        return (
            <div className="post-details post-details-user-menu">
                <span>
                    <img className="user-follow-image" src={following.profile_picture} alt="following img" />
                </span>
                <span className="post-user">
                    <span className="user-username">{following?.username}</span>
                    <span className={`follow-user-button ${(following?.username === session?.user?.username) && "hidden"}`}>
                        <div className="follow-button-container">
                            <span className="follow-user-button" onClick={() => handleFollowButton(following.id)}>{followed ? "Unfollow" : "Follow"}</span>
                        </div>

                    </span>
                </span>
            </div>
        )
    }


    return (
        <>
            <h2>
                Following Users
            </h2>
            {followings && followings.map((following, idx) => (
                <div key={idx} >
                    <FollowingUser following={following} idx={idx} />
                </div>


            ))}
        </>
    )
}
