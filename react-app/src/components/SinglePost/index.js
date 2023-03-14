import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostLike from "../PostLike";
import { likePost } from "../../store/posts";
import "./SinglePost.css";

function SinglePost({ info }) {
    const [openComments, setOpenComments] = useState(false);
    const [liked, setLiked] = useState(false);
    const [viewStat, setViewStat] = useState("comments");
    const [comment, setComment] = useState("")
    const [post, session] = info

    const dispatch = useDispatch()

    const commentPlaceholders = [
        "Add to the discussion",
        "Say your thing",
        "Add something wonderful",
        "Your words here",
        "Have something to say?",
        "Unleash a compliment",
        "Reply your heart out",
        "Send something nice"
    ];

    const handleLikeButton = () => {
        if (session?.user) {
            setLiked(!liked);
            dispatch(likePost(session.user.id, post.id))
        } else {
            console.log("You need to belogged in to test that feature!")
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        console.log("Comment submit button is working! Input: ", comment)
        setComment("")
    };

    return (
        <div className="post-comment-section-container">
            <div className="post-option-container">
                <div className="post-options">
                    <div className={`view-comments-button ${openComments ? "hidden" : "show"}`} onClick={() => setOpenComments(!openComments)}>
                        {post.comments.length + post.likes.amount} notes
                    </div>
                    <div className={`close-comments-button ${openComments ? "show" : "hidden"}`} onClick={() => setOpenComments(!openComments)}>
                        <i className="fa-solid fa-x fa-xs close-comments-button-image" />
                        <p className="close-notes-button-text">Close notes</p>
                    </div>
                    <div className="comment-and-like-button-container">
                        <i className={"fa-sharp fa-regular fa-comment fa-xl comment-button"} onClick={() => setOpenComments(!openComments)} />
                        <i className={`fa-heart fa-xl like-button ${liked ? "liked fa-solid" : "fa-regular"}`} onClick={handleLikeButton} />
                    </div>
                </div>
            </div>

            <div className={openComments ? "post-comments-container" : "hidden"}>
                <div className="post-stats-container">
                    <div className="post-stats">
                        <div className={`post-comment-count-container ${viewStat === "comments" && "viewing"}`} onClick={() => setViewStat('comments')}>
                            <i className="fa-sharp fa-regular fa-comment fa-lg comment-button" />
                            <div className="post-comment-count">{post.comments.length}</div>
                        </div>
                        <div className={`post-like-count-container ${viewStat === "likes" && "viewing"}`} onClick={() => setViewStat('likes')}>
                            <i className="fa-sharp fa-regular fa-heart fa-lg like-button" />
                            <div className="post-like-count">{post.likes.amount}</div>
                        </div>
                    </div>
                    <div className="comment-order-selector-container">
                        {/* <div className="comment-order-selector">

                        </div> */}
                    </div>
                </div>
                <div className={`make-comment-container ${(!session?.user || viewStat !== "comments") && "hidden"}`}>
                    <div className="current-user-image-container">
                        <img className="current-user-image" src={session?.user?.profile_picture} alt="user profile"></img>
                    </div>
                    <form className="type-comment-box-container" onSubmit={(e) => handleCommentSubmit(e)}>
                        <textarea className="type-comment-box"
                            rows="1"
                            type="text"
                            value={comment}
                            placeholder={commentPlaceholders[Math.floor(Math.random() * commentPlaceholders.length)]}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button className="submit-comment-button"
                            type="submit"
                            disabled={comment === ""}
                        >
                            Reply
                        </button>
                    </form>
                </div>
                <div className={`comments-container ${viewStat !== "comments" && "hidden"}`}>
                    {post.comments.length ? post.comments.map((comment, idx) => (
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
                    ))
                        :
                        <p className="hidden"></p>
                    }
                </div>
                <div className={`likes-container ${viewStat !== "likes" && "hidden"}`}>
                    {post.likes.amount ? post.likes.users.map((like, idx) => (
                        <div className="user-like" key={idx}>
                            <PostLike info={[like, session]} />
                        </div>
                    ))
                        :
                        <p className="hidden"></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePost
