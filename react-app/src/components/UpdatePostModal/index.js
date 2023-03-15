import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./UpdatePostModal.css";

const UpdatePostModal = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = () => {
        console.log("Delete modal button working!")
    }

    return (
        <>
            <h1>To be worked on</h1>
        </>
    )
};

export default UpdatePostModal;
