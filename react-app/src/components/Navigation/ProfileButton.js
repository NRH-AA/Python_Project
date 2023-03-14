import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import UserFollower from "./UserFollower";
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

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

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      {user ? (
        <div id='navbar-right-logged-in'>
          <button id='user-menu-button' onClick={openMenu}>
            <i className="fa-solid fa-user fa-xl" />
          </button>
          <div id='user-menu-options' className={ulClassName} ref={ulRef}>
            <div className="user-menu-header user-menu-section top">
              <div>Account</div>
              <div id='logout-button' onClick={handleLogout}>Log out</div>
            </div>
            <div className="user-menu-section">
              <div>
                <i className="fa-solid fa-heart user-menu-section-image" />
                Likes
              </div>
            </div>
            <div className="user-menu-section">
              <div>
                <i className="fa-regular fa-address-book user-menu-section-image" />
                <span id="user-menu-follower">       <OpenModalButton

                  buttonText="Follower"
                  modalComponent={<UserFollower userId={user.id} />}
                />

                </span>
              </div>
            </div>
            <div className="user-menu-header user-menu-section">
              <div>Blogs</div>
              <div>+ New</div>
            </div>
            {/* <img src={user.profile_picture}></img> */}
            <div className="user-menu-section">
              {user.username}
            </div>
          </div>
          <div id="nav-post-button">
            <i className="fa-sharp fa-solid fa-pencil fa-lg" />
          </div>
        </div>
      ) : (
        <div id="session-options">
          <OpenModalButton
            buttonText="Log In"
            onItemClick={closeMenu}
            modalComponent={<LoginFormModal />}
            id='login-button'
            className='test1'
          />

          <OpenModalButton
            buttonText="Sign Up"
            onItemClick={closeMenu}
            modalComponent={<SignupFormModal />}
          />
        </div>
      )}
    </>
  );
}

export default ProfileButton;
