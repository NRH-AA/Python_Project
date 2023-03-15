import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { updatePost } from "../../store/posts";
import "./UpdatePostModal.css";

const UpdatePostModal = ({ info }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [session, post] = info;

    const [postTitle, setPostTitle] = useState(post.post_title || "")
    const [imageURL, setImageURL] = useState(post.imageURL || "")
    const [postText, setPostText] = useState(post.post_text || "")


    const handleUpdate = () => {
        console.log("Update modal button working!")
        const postDetails = {
            post_title: postTitle,
            post_URL: imageURL,
            post_text: postText
        }
        dispatch(updatePost(post.id, postDetails))
    }

    return (
        <>
            <div id="origional-user-username-container">
                <p id="origional-user-username">{session.user.username}</p>
            </div>
            <div id="update-post-container">
                <textarea
                    id="update-heading-input"
                    placeholder="Heading"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <textarea
                    id="update-image-input"
                    placeholder="Image"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                />
                <textarea
                    id="update-text-input"
                    placeholder="Go ahead, put anything."
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                />
            </div>
            <div id="update-post-options-container">
                <div id="update-post-close-button">Close</div>
                <div id="update-post-save-button" onClick={handleUpdate}>Save</div>
            </div>
        </>
    )
};

export default UpdatePostModal;
