import React, { useEffect, useState, useRef } from "react";
import './CommentOptionsMenu.css'

const CommentOptionsMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current?.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(!showMenu);
    }

    const handleReplyComment = async (e) => {
        console.log("Reply to comment button is working!")
    }

    const handleUpdateComment = async (e) => {
        console.log("Update comment button is working!")
    }

    const handleDeleteComment = async (e) => {
        console.log("Delete comment button is working!")
    }

    const closeMenu = () => setShowMenu(false);

    return (
        <>
            <i className="fa-solid fa-ellipsis open-commenter-options-button" onClick={openMenu} />
            <div className="origional-commenter-options-menu">
                <div className={`origional-commenter-options-menu-section comment-reply-button ${!showMenu && "hidden"}`} onClick={handleReplyComment}>Reply</div>
                <div className={`origional-commenter-options-menu-section comment-delete-button ${!showMenu && "hidden"}`} onClick={handleDeleteComment}>Delete Reply</div>
                <div className={`origional-commenter-options-menu-section comment-edit-button ${!showMenu && "hidden"}`} onClick={handleUpdateComment}>Edit</div>
                <div className={`origional-commenter-options-menu-section ${!showMenu && "hidden"}`} onClick={() => setShowMenu(false)}>Close</div>
            </div>
        </>
    )
}

export default CommentOptionsMenu
