import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteCommentThunk } from "../../store/posts";
import "./DeleteReplyModal.css"

const DeleteReplyModal = ({ commentId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = () => {
        dispatch(deleteCommentThunk(commentId))
        .then(closeModal)
    }

    return (
        <div id="delete-reply-modal-container">
            <h2 id="delete-reply-modal-prompt">You definitely want to delete this reply?</h2>
            <div id="delete-reply-modal-buttons-container">
                <div id="cancel-delete-reply-button" onClick={closeModal}>Nevermind</div>
                <div id="delete-reply-button" onClick={handleDelete}>Delete this reply</div>
            </div>
        </div>
    )
}

export default DeleteReplyModal
