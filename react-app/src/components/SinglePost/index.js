import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PostLike from "../PostLike";
import { likePost, createCommentThunk, updateCommentThunk } from "../../store/posts";
import "./SinglePost.css";
import CommentOptionsMenu from "../CommentOptionsMenu";
import OpenModalButton from "../OpenModalButton";
import DeletePostModal from "../DeletePostModal";
import UpdatePostModal from "../UpdatePostModal";

function SinglePost({ info }) {
    const [post, session] = info

    const likes = post?.likes?.users?.map((like) => {
        return like?.username
    })

    const [openComments, setOpenComments] = useState(false);
    const [liked, setLiked] = useState(likes.includes(session?.user?.username));
    const [viewStat, setViewStat] = useState("comments");
    const [comment, setComment] = useState("")
    const [updateComment, setUpdateComment] = useState("")
    const [isDifferent, setIsDifferent] = useState(false)
    const [updatingComment, setUpdatingComment] = useState(false)
    const [focusedComment, setFocusedComment] = useState(0)

    useEffect(() => {
        setLiked(likes?.includes(session?.user?.username))
    }, [likes])

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

    function sortComments(comments) {
        const arr = []
        for (const id in comments) {
            arr.push(comments[id])
        }
        arr.sort(function (a, b) {
            if (a.createdAt < b.createdAt) return 1;
            if (a.createdAt > b.createdAt) return -1;
            return 0;
        })
        return arr
    }

    const orderedComments = sortComments(post?.comments)

    const handleLikeButton = () => {
        if (session?.user) {
            setLiked(!liked);
            dispatch(likePost(session.user.id, post.id))
        } else {
            window.alert("You need to log in to test use that feature!")
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        if (comment.length < 1) return;

        const userId = session?.user?.id
        dispatch(createCommentThunk(post?.id, userId, comment));
        setComment("");
    };

    const handleEditing = (text, curr) => {
        setIsDifferent(text.value !== curr)
        setUpdateComment(text)
    }

    const handleEditCommentSubmit = async (e, userComment) => {
        e.preventDefault();

        if (userComment.user_id !== session.user.id) return;
        if (updateComment.length < 1) return;

        dispatch(updateCommentThunk(userComment.id, updateComment));
        setUpdatingComment(false);
        setUpdateComment(updateComment)
        setComment("");
    }

    function setUpdating() {
        if (updatingComment) return;
        setUpdatingComment(true);
    }

    function setFocusComment(comment) {
        setFocusedComment(comment.id)
        setUpdating()
    }

    function commentDiv(userComment) {
        if (updatingComment && session.user.id === userComment.user_id
            && userComment.id === focusedComment) {
            return <div className="post-comment">
                <textarea
                    maxLength="250"
                    className="edit-post-comment"
                    value={isDifferent ? updateComment : userComment.comment}
                    onChange={(e) => handleEditing(e.target.value, userComment.comment)}
                    autoFocus
                    onFocus={function(e) {
                        var val = e.target.value;
                        e.target.value = '';
                        e.target.value = val;
                      }}
                >
                </textarea>
                <div id="edit-comment-button-div">
                    <button className="edit-comment-button update"
                        onClick={(e) => handleEditCommentSubmit(e, userComment)}
                        disabled={updateComment === userComment.comment || updateComment.length === 0}
                    >Update</button>
                    <button className="edit-comment-button cancel"
                        onClick={() => {
                            setUpdatingComment(false);
                            setUpdateComment(userComment.comment);
                        }}
                    >Cancel</button>
                </div>
            </div>
        }
        return <div className="post-comment"
            onClick={() => session?.user?.id === userComment?.user_id ?
                setFocusComment(userComment)
                : ""
            }
        >
            {userComment.comment}
        </div>
    }



    return (
        <>
            {session.user &&
                <div className={`origional-poster-options ${post.user_id !== session.user.id && "hidden"}`}>
                    <OpenModalButton
                        className="open-update-post-modal-button"
                        buttonText={<i className="fa-regular fa-trash-can fa-xl delete-post-button-icon" />}
                        modalComponent={<DeletePostModal
                            postId={post.id}
                        />} />
                    <OpenModalButton
                        className="open-delete-post-modal-button"
                        buttonText={<i className="fa-solid fa-pencil fa-xl edit-post-button-icon" />}
                        modalComponent={<UpdatePostModal
                            type={post.imageURL ? "photo" : ""}
                            post={post}
                        />}
                    />
                </div>
            }
            <div className="post-react-options-container">
                <div className="post-options">
                    <div className={`view-comments-button ${openComments ? "hidden" : "show"}`} onClick={() => setOpenComments(!openComments)}>
                        {post?.comments?.length + post?.likes?.amount} notes
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
            <div className={`post-comment-section-container ${!openComments && "hidden"}`}>
                <div className={openComments ? "post-comments-container" : "hidden"}>
                    <div className="post-stats-container">
                        <div className="post-stats">
                            <div className={`post-comment-count-container ${viewStat === "comments" && "viewing"}`} onClick={() => setViewStat('comments')}>
                                <i className="fa-sharp fa-regular fa-comment fa-lg comment-button" />
                                <div className="post-comment-count">{post?.comments?.length}</div>
                            </div>
                            <div className={`post-like-count-container ${viewStat === "likes" && "viewing"}`} onClick={() => setViewStat('likes')}>
                                <i className="fa-sharp fa-regular fa-heart fa-lg like-button" />
                                <div className="post-like-count">{post?.likes?.amount}</div>
                            </div>
                        </div>
                        <div className="comment-order-selector-container">
                            {/* <div className="comment-order-selector"></div> */}
                        </div>
                    </div>
                    <div className={`make-comment-container ${(!session?.user || viewStat !== "comments") && "hidden"}`}>
                        <div className="current-user-image-container">
                            <img className="current-user-image" src={session?.user?.profile_picture} alt="user profile"></img>
                        </div>
                        <form className="type-comment-box-container" onSubmit={handleCommentSubmit}>
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
                    <div className={`comments-container ${viewStat !== "comments" && "hidden"} ${post.comments.length ? "" : "empty"}`}>
                        {post.comments.length ? orderedComments.map((comment, idx) => (
                            <div className="post-comment-container" key={idx}>
                                <div className="post-commenter-information-container"
                                    onClick={() => session?.user?.id === comment?.user_id ? setFocusComment(comment) : ""}
                                >
                                    <img className="post-commenter-image" src={comment.user.profile_picture} alt="post commenter"></img>
                                    <div className="post-comment-box">
                                        <div className="post-commenter-username">
                                            <p className="post-commenter-p">{comment.user.username}</p>
                                            <p className="post-commenter-p2">
                                                {!updatingComment && session?.user?.id === comment?.user?.id ? "Click to update" : ""}
                                            </p>
                                        </div>
                                        {commentDiv(comment)}
                                    </div>
                                </div>
                                <div className={`origional-commenter-options-container ${comment?.user_id !== session?.user?.id && "hidden"}`}>
                                    <CommentOptionsMenu commentId={comment.id} />
                                </div>
                            </div>
                        ))
                            :
                            <div className="no-comments-message-container">
                                <i className="fa-regular fa-comment fa-2xl no-comments-message-icon" />
                                <div className="no-comments-message">Be the first to Reply!</div>
                            </div>
                        }
                    </div>
                    <div className={`likes-container ${viewStat !== "likes" && "hidden"} ${post?.likes?.amount ? "" : "empty"}`}>
                        {post?.likes?.amount ? post?.likes?.users?.map((like, idx) => (
                            <div className="user-like" key={idx}>
                                <PostLike info={[like, session]} />
                            </div>
                        ))
                            :
                            <div className="no-likes-message-container">
                                <i className="fa-regular fa-heart fa-2xl no-likes-message-icon" />
                                <div className="no-likes-message">Give the first Like!</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost
