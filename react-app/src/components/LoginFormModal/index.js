import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { emailExists } from "../../store/user";
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

  const checkValidEmail = () => {
		if (!email.includes('@') || !email.includes('.')) return ["Email is invalid"];
		if (!email || !email.length > 6) return ["Email must be 6 characters or more"];

		const textAfterPeriod = email.split(".")[1]
		const textAfterAmpersand = email.split("@")[1]

		if (!textAfterPeriod || !textAfterAmpersand) return ["Email is invalid"]
		return false
	}

	const handleEmailSubmit = async (e) => {
		if (e) e.preventDefault();

		const checkEmail = checkValidEmail();
		if (checkEmail) return setErrors(checkEmail)

		setErrors([]);
		const emailReturn = await dispatch(emailExists(email))
    if (emailReturn && emailReturn.errors) {
        setErrors(emailReturn.errors);
    } else {
        setIsEmailEntered(true)
    }
	};

  const handleLoginSubmit = async (e) => {
    if (e) e.preventDefault();
    
    setErrors([]);
    dispatch(login(email, password))
    .then(async (res) => {
      if (res && res.errors) return setErrors(['Password is invalid.']);
      closeModal();
    });
  };
  
  const tabSubmitEmail = (e) => e.key === "Tab" && handleEmailSubmit(e);
	const tabSumbitLogin = (e) => e.key === "Tab" && handleLoginSubmit(e);

  const signInDemoUser = () => {
    return dispatch(login('demo@aa.io', 'password'))
      .then(closeModal);
  };
  
  const showEmailForm = () => {
    return (
      <form noValidate className={isEmailEntered ? 'hidden login-form' : 'login-form'} onSubmit={handleEmailSubmit}>
          <h4 className="login-form-text">Enter your email to log in:</h4>
          <label className="login-input-label">
            <input
              className="login-input-field"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => tabSubmitEmail(e)}
              autoFocus={true}
              required
            />
          </label>
          <button className='login-form-button' type='submit' disabled={email === ''}>
            Next
            <i className="fa-solid fa-arrow-right login-form-arrow-img" />
          </button>
      </form>
    );
  };
  
  const showPasswordForm = () => {
    return (
      <form noValidate className={isEmailEntered ? 'login-form' : 'hidden login-form'} onSubmit={handleLoginSubmit}>
          <h4 className="login-form-text">Welcome back to your corner of the internet.</h4>
          <label className="login-input-label">
            <input
              className="login-input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => tabSumbitLogin(e)}
              autoFocus={true}
              required
            />
          </label>
          <button className="login-form-button" type="submit" disabled={password.length < 6 && true}>
            Log in
            <i className="fa-solid fa-arrow-right login-form-arrow-img" />
          </button>
      </form>
    );
  };

  return (
    <div id="login-modal-container-container">
      <i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={backtrack} />
      <div id='login-modal-container'>
        <h1 id="login-title">Scrollr</h1>
        
        {!isEmailEntered && showEmailForm()}
        {isEmailEntered && showPasswordForm()}

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
