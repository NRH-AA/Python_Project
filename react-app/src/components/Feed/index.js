import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import AboutModal from "../AboutModal";
import CreatePostForm from "../CreatePosts";
import OpenModalButton from "../OpenModalButton";
import SinglePost from "../SinglePost";
import "./Feed.css";
import FollowUnfollowPostOwner from "./FollowUnfollowPostOwner";
import TechnologiesModal from "../TechnologiesModal";

function Feed() {
    const dispatch = useDispatch();

    const allPosts = useSelector(state => state.posts)
    const session = useSelector(state => state.session)
    const unorderedPosts = allPosts.allPosts

    const sortPosts = (posts) => {
        const arr = []
        for (const id in posts) {
            arr.push(posts[id])
        }
        arr.sort(function (a, b) {
            if (a.createdAt < b.createdAt && a.likes.amount < b.likes.amount) return 1;
            if (a.createdAt > b.createdAt && a.likes.amount > b.likes.amount) return -1;
            return 0;
        })
        return arr
    }

    const posts = sortPosts(unorderedPosts)

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div id="homepage">
            <div id='dashboard'>
                <div id="logged-user-bar" className={session?.user ? "" : "hidden"}>
                    <OpenModalButton
                        buttonText={<img id="logged-user-image" src={session?.user?.profile_picture} alt="user profile"></img>}
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
                            modalComponent={<CreatePostForm type="photo" />}
                        />
                        <div className="post-option-container forbidden">
                            <i id="post-quote-option-icon" className="fa-solid fa-quote-left fa-2xl post-option-icon" />
                            <div className="post-option-text">Quote</div>
                        </div>
                        <div className="post-option-container forbidden">
                            <i id="post-link-option-icon" className="fa-solid fa-link fa-2xl post-option-icon" />
                            <div className="post-option-text">Link</div>
                        </div>
                        <div className="post-option-container forbidden">
                            <i id="post-chat-option-icon" className="fa-solid fa-message fa-2xl post-option-icon" />
                            <div className="post-option-text">Chat</div>
                        </div>
                        <div className="post-option-container forbidden">
                            <i id="post-audio-option-icon" className="fa-solid fa-headphones fa-2xl post-option-icon" />
                            <div className="post-option-text">Audio</div>
                        </div>
                        <div className="post-option-container forbidden">
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
                                />
                            </div>
                            <div className="post-details">
                                <FollowUnfollowPostOwner targetUser={post.user} session={session} />
                                <h2 className={`post-title ${!post?.post_title && "hidden"}`}>{post?.post_title}</h2>
                                <img className={post?.imageURL !== null ? "post-image" : "hidden"} src={post?.imageURL} alt=''></img>
                                <div className={post?.post_text ? "post-text" : "hidden"}>{post?.post_text}</div>
                                <SinglePost info={[post, session]} />
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div id='extras'>
                <OpenModalButton
                    modalComponent={AboutModal}
                    buttonText="About"
                />
                <a className="github-to-link" href="https://github.com/NRH-AA/Python_Project" target="_blank" rel="noopener noreferrer">Github</a>
                <OpenModalButton
                    modalComponent={TechnologiesModal}
                    buttonText="Technologies"
                />
            </div>
        </div>
    )
}

export default Feed
