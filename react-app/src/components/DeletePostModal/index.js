import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deletePost } from "../../store/posts";
import "./DeletePostModal.css";




const DeletePostModal = ({ postId }) => {

    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = () => {



        dispatch(deletePost(postId))
        .then(closeModal)
    }

    return (
        <>
            <h2 id="delete-modal-prompt">Are you sure you want to delete this post?</h2>
            <div id="delete-modal-buttons-container">
                <div id="cancel-delete-post-button" onClick={closeModal}>Cancel</div>
                <div id="delete-post-button" onClick={handleDelete}>OK</div>
            </div>
        </>
    )
};

export default DeletePostModal;
