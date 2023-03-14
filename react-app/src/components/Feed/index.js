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

    const handleCommentButton = async (e) => {
        console.log('Comment button is working!', e.target)
    }

    const handleLikeButton = async (e) => {
        console.log('Like button is working!', e.target.classList)
    }

    return (
        <div id='dashboard'>
            <div id="feed">
                {posts && Object.values(posts).map((post, idx) => (
                    <div className="post" key={idx}>
                        <div className="post-user-image-container">
                            <img className="post-user-image" src={post.user.profile_picture} alt='user profile'></img>
                        </div>
                        <div className="post-details">
                            <div className="post-user">
                                <div className="user-username">{post.user.username}</div>
                                <div className="follow-user-button">Follow</div>
                            </div>
                            <h2 className="post-title">{post.post_title}</h2>
                            <img className={post.imageURL !== null ? "post-image" : "hidden"} src={post.imageURL} alt=''></img>
                            <div className={post.post_heading ? "post-heading" : "hidden"}>{post.post_heading}</div>
                            <div className={post.post_text ? "post-text" : "hidden"}>{post.post_text}</div>
                            <div className="post-option-container">
                                <div className="post-options">
                                    <div className="view-comments-button">
                                        {post.comments.length} notes
                                    </div>
                                    <div className="comment-and-like-button-container">
                                        <i className={`fa-sharp fa-regular fa-comment fa-xl comment-button ${post.id}`} onClick={(e) => handleCommentButton(e)} />
                                        <i className={`fa-regular fa-heart fa-xl like-button ${post.id}`} onClick={(e) => handleLikeButton(e)} />
                                        <i className={`fa-solid fa-heart fa-xl hidden ${post.id}`} onClick={(e) => handleLikeButton(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className={post.comments ? "post-comments-container" : "hidden"}>
                                {post.comments.map((comment, idx) => (
                                    <div className="post-comment-container" key={idx}>
                                        <img className="post-commenter-image" src={comment.user.profile_picture} alt="post commenter"></img>
                                        <div className="post-comment-box">
                                            <div className="post-commenter-username">
                                                {comment.user.username}
                                            </div>
                                            <div className="post-comment" key={idx}>
                                                {comment.comment}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
            <div id='extras'>
                {/* <p>About</p>
                <p>Apps</p>
                <p>Legal</p>
                <p>Privacy</p> */}
            </div>
        </div>
    )
}

export default Feed
