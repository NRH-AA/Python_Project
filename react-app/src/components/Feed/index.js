import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import "./Feed.css";

function Feed() {
    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.allPosts)

    // const commentPlaceholders = [
    //     "Add to the discussion",
    //     "Say your thing",
    //     "Add something wonderful",
    //     "Your words here",
    //     "Have something to say?",
    //     "Unleash a compliment",
    //     "Reply your heart out",
    //     "Send something nice"
    // ];

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const handleCommentButton = async (e) => {
        console.log('Comment button is working!', e.target)
    };

    const handleLikeButton = async (e) => {
        console.log('Like button is working!', e.target.classList)
    };

    // const handleCommentSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('Submit comment button is working!')
    //     console.log('Here is the comment being sent: ', e.target.children[0].value)
    //     console.log('Here is the post id: ', e.target.classList[0])
    // };

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

                            <div className={post.comments.length ? "post-comments-container" : "hidden"}>
                                <div className="post-stats-container">
                                    <div className="post-stats">
                                        <div className="post-comment-count-container">
                                            <i className="fa-sharp fa-regular fa-comment fa-lg comment-button" />
                                            <div className="post-comment-count">{post.comments.length}</div>
                                        </div>
                                        <div className="post-like-count-container">
                                            <i className="fa-sharp fa-regular fa-heart fa-lg like-button" />
                                            <div className="post-like-count">{post.likes}</div>
                                        </div>
                                    </div>
                                    <div className="comment-order-selector-container">
                                        {/* <div className="comment-order-selector">

                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="make-comment-container">
                                    <div className="current-user-image">

                                    </div>
                                    <form className="type-comment-box-container" onSubmit={(e) => handleCommentSubmit(e)}>
                                        <input className={`${post.id} type-comment-box`}
                                            type="text"
                                            placeholder={commentPlaceholders[Math.floor(Math.random() * commentPlaceholders.length)]}
                                            required
                                        />
                                        <button className={`${post.id} submit-comment-button`}
                                            type="submit"
                                        >
                                            Reply
                                        </button>
                                    </form>
                                </div> */}
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
