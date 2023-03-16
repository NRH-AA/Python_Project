import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import CreatePostForm from "../CreatePosts";
import OpenModalButton from "../OpenModalButton";
import SinglePost from "../SinglePost";
import UserHome from "../UserHome";
import "./Feed.css";
import { followUnfollowUser } from "../../store/user";

function Feed() {
    const dispatch = useDispatch();

    const allPosts = useSelector(state => state.posts)
    const posts = allPosts.allPosts
    const session = useSelector(state => state.session)


    const unfinishedAlert = () => {
        window.alert("Sorry, this feature is not functional.")
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    // Need to implement a way to check if a post's user is in current user's followings
    // Following user
    const FollowingPostOwner = ({ post }) => {
        //const [followed, setFollowed] = useState(false);
        let followedStr = false
        const currUserId = session.user?.id
        const followerUserIdList = post.user?.followers.map(follower => follower.id)
        //if (currUserId in followerUserIdList) setFollowed(true)
        if (currUserId in followerUserIdList) followedStr = true
        const [followed, setFollowed] = useState(followedStr);
        //console.log(followerUserIdList)
        const handleFollowButton = (target_user_id) => {
            if (session?.user) {
                setFollowed(!followed);
                //console.log(following)
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
                        <span className="follow-user-button" onClick={() => handleFollowButton(post.user.id)}>{followed ? "Unfollow" : "Follow"}</span>
                    </div>
                </span>
            </div>
        )
    }

    return (
        <div id="homepage">
            <div id='dashboard'>
                <div id="logged-user-bar" className={session.user ? "" : "hidden"}>
                    <OpenModalButton
                        buttonText={<img id="logged-user-image" src={session?.user?.profile_picture} alt="user profile"></img>}
                        // modalComponent={<UserHome info={[session, posts]} />}
                        onButtonClick={() => unfinishedAlert()}
                    />
                    <div id="logged-user-post-options">
                        <OpenModalButton
                            buttonText={
                                <div id="post-text-option-container" className="post-option-container">
                                    <i id="post-text-option-icon" className="fa-solid fa-font fa-2xl post-option-icon" />
                                    <div className="post-option-text">Text</div>
                                </div>
                            }
                            modalComponent={<CreatePostForm />}
                        />
                        <OpenModalButton
                            buttonText={
                                <div className="post-option-container">
                                    <i id="post-image-option-icon" className="fa-solid fa-camera fa-2xl post-option-icon" />
                                    <div className="post-option-text">Photo</div>
                                </div>
                            }
                            modalComponent={<CreatePostForm type="photo"/>}
                        />
                        <div className="post-option-container" onClick={() => unfinishedAlert()}>
                            <i id="post-quote-option-icon" className="fa-solid fa-quote-left fa-2xl post-option-icon" />
                            <div className="post-option-text">Quote</div>
                        </div>
                        <div className="post-option-container" onClick={() => unfinishedAlert()}>
                            <i id="post-link-option-icon" className="fa-solid fa-link fa-2xl post-option-icon" />
                            <div className="post-option-text">Link</div>
                        </div>
                        <div className="post-option-container" onClick={() => unfinishedAlert()}>
                            <i id="post-chat-option-icon" className="fa-solid fa-message fa-2xl post-option-icon" />
                            <div className="post-option-text">Chat</div>
                        </div>
                        <div className="post-option-container" onClick={() => unfinishedAlert()}>
                            <i id="post-audio-option-icon" className="fa-solid fa-headphones fa-2xl post-option-icon" />
                            <div className="post-option-text">Audio</div>
                        </div>
                        <div className="post-option-container" onClick={() => unfinishedAlert()}>
                            <i id="post-video-option-icon" className="fa-solid fa-video fa-2xl post-option-icon" />
                            <div className="post-option-text">Video</div>
                        </div>
                    </div>
                </div>
                <div id="feed">
                    {posts && Object.values(posts).map((post, idx) => (
                        <div className="post" key={idx}>
                            <div className="post-user-image-container">
                                <OpenModalButton
                                    buttonText={<img className="post-user-image" src={post?.user?.profile_picture} alt='user profile'></img>}
                                    // modalComponent={<UserHome info={[session, posts]} />}
                                    onButtonClick={() => unfinishedAlert()}
                                />
                            </div>
                            <div className="post-details">
                                {/* <div className="post-user">
                                    <div className="user-username">{post?.user?.username}</div>
                                    <div className={`follow-user-button ${(post.user_id === session?.user?.id) && "hidden"}`}>Follow</div>
                                </div> */}
                                <FollowingPostOwner post={post} />
                                <h2 className="post-title">{post.post_title}</h2>
                                <img className={post.imageURL !== null ? "post-image" : "hidden"} src={post.imageURL} alt=''></img>
                                <div className={post.post_text ? "post-text" : "hidden"}>{post.post_text}</div>
                                <SinglePost info={[post, session]} />
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div id='extras'>
                <p onClick={() => unfinishedAlert()}>About</p>
                <p onClick={() => unfinishedAlert()}>Apps</p>
                <p onClick={() => unfinishedAlert()}>Legal</p>
                <p onClick={() => unfinishedAlert()}>Privacy</p>
            </div>
        </div>
    )
}

export default Feed
