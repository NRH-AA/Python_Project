import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deletePost } from "../../store/posts";
import "./DeletePostModal.css";

const DeletePostModal = (id) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = () => {
        console.log("Delete modal button working!")
        dispatch(deletePost(id))
    }

    return (
        <>
            <h1 id="delete-modal-prompt">Are you sure you want to delete this post?</h1>
            <div id="delete-modal-buttons-container">
                <div id="cancel-delete-post-button" onClick={handleDelete}>OK</div>
                <div id="delete-post-button" onClick={closeModal}>Cancel</div>
            </div>
        </>
    )
};

export default DeletePostModal;
