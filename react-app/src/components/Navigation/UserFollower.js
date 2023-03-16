import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowers } from "../../store/user";
import './Navigation.css';
import './Follower.css';
// import '../Feed/Feed.css';

export default function UserFollower({ userId }) {
    const dispatch = useDispatch();
    const followers = useSelector(state => state.user.followers)
    //console.log(followers)
    useEffect(() => {
        dispatch(getUserFollowers(userId))
    }, [dispatch, userId])



    return (
        <>

            <h2 className="Follower Tite">
                Users Following
            </h2>
        <div className="following-Users">
            {followers && followers.map((follower, idx) => (
                <div>
                    <img className="user-follow-image" src={follower.profile_picture} alt="follower img"></img>
                    {follower.username}
                </div>

))}
</div>
        </>
    )
}
