import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { logout } from "../../store/session";
import "./LogoutModal.css";

const LogoutModal = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
            .then(closeModal)
            .then(history.push(`/`))
    };

    return (
        <div id="logout-modal-container">
            <div id="logout-modal-div">
                <h2 id="logout-modal-h2">Are you sure you want to log out?</h2>
                <div id="logout-modal-button-div">
                    <div id="cancel-logout-modal-button" onClick={closeModal}>Cancel</div>
                    <div id="confirm-logout-modal-button" onClick={handleLogout}>Ok</div>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
