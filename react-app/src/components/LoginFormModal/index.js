import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { isValidEmail } from "../../store/user";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isEmailEntered, setIsEmailEntered] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const backtrack = () => {
    isEmailEntered ? setIsEmailEntered(false) : closeModal();
    setErrors([]);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    setErrors([]);
    dispatch(isValidEmail(email))
    .then(async (res) => {
      if (res && res.errors) return setErrors(res.errors);
      setIsEmailEntered(true);
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    setErrors([]);
    dispatch(login(email, password))
    .then(async (res) => {
      if (res && res.errors) return setErrors(['Password is invalid.']);
      closeModal();
    });
    
  };

  const signInDemoUser = () => {
    return dispatch(login('demo@aa.io', 'password'))
      .then(closeModal);
  };

  return (
    <div id="login-modal-container-container">
      <i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={backtrack} />
      <div id='login-modal-container'>
        <h1 id="login-title">scrollr</h1>
        <form noValidate className={isEmailEntered ? 'hidden login-form' : 'login-form'} onSubmit={handleEmailSubmit}>
          <h4 className="login-form-text">Enter your email to log in or register:</h4>
          <label className="login-input-label">
            <input
              className="login-input-field"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button className='login-form-button' type='submit' disabled={email === ''}>
            Next
            <i className="fa-solid fa-arrow-right login-form-arrow-img" />
          </button>
        </form>

        <form noValidate className={isEmailEntered ? 'login-form' : 'hidden login-form'} onSubmit={handleLoginSubmit}>
          <h4 className="login-form-text">Welcome back to your corner of the internet.</h4>
          <label className="login-input-label">
            <input
              className="login-input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-form-button" type="submit">
            Log in
            <i className="fa-solid fa-arrow-right login-form-arrow-img" />
          </button>
        </form>

        <ul id='login-form-errors' className={errors.length ? '' : 'hidden'}>
          <i className="fa-solid fa-circle-exclamation" id='login-errors-symbol' />
          <div id='login-form-error-container'>
            {errors.map((error, idx) => (
              <li className='login-form-error' key={idx}>{error}</li>
            ))}
          </div>
        </ul>
        <p id='demo-user-sign-in' onClick={signInDemoUser}>demo user</p>
      </div>
    </div>
  );
};

export default LoginFormModal;
