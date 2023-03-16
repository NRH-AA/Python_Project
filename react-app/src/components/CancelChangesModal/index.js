import { useModal } from "../../context/Modal";
import "./CancelChangesModal.css"

const CancelChangesModal = () => {
    const { closeModal } = useModal();

    return (
        <div id="cancel-changes-modal">
            <h2 id="cancel-changes-modal-prompt">Discard changes?</h2>
            <div id="cancel-changes-button-container">
                <div id="cancel-changes-cancel-button" onClick={closeModal}>Cancel</div>
                <div id="cancel-changes-discard-button" onClick={closeModal}>Discard</div>
            </div>
        </div>
    )
}

export default CancelChangesModal
