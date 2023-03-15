import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./DeletePostModal.css";

const DeletePostModal = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = () => {
        console.log("Delete modal button working!")
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
