import { useState } from "react";
import { useModal } from "../../context/Modal";
import "./LogoutModal.css";


const LogoutModal = () => {
    
    return (
        <div id="logout-modal-container">
            <div id="logout-modal-div">
                <h2 id="logout-modal-h2">Are you sure you want to log out?</h2>
                <div id="logout-modal-button-div">
                    <button className="logout-modal-button">Cancel</button>
                    <button className="logout-modal-button">Ok</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
