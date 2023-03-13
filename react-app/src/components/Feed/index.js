import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import "./Feed.css";

function Feed() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allPosts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div id='dashboard'>
            <div id="feed">
                {posts && Object.values(posts).map((post, idx) => (
                    <div className="post" key={idx}>
                        <div className="post-user-image"></div>
                        <div className="post-details">
                            <div className="follow-user-button">Follow</div>
                            <h2 className="post-title">{post.post_title}</h2>
                            {post.imageURL !== null ?
                                <img className="post-image" src={post.imageURL} alt=''></img>
                                :
                                <div className="hidden"></div>}
                            <div className="post-heading">{post.post_heading}</div>
                            <div className="post-text">{post.post_text}</div>
                            <div className="post-option-container">
                                <div className="post-options">
                                    <i className="fa-sharp fa-regular fa-comment fa-xl comment-button" />
                                    {/* <i className="fa-sharp fa-solid fa-comment fa-xl" /> */}
                                    <i className="fa-regular fa-heart fa-xl like-button" />
                                    {/* <i className="fa-solid fa-heart fa-xl" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            <div id='extras'>
                <p>About</p>
                <p>Apps</p>
                <p>Legal</p>
                <p>Privacy</p>
            </div>
        </div>
    )
}

export default Feed
