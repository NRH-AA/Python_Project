import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function EmailFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState([]);
  const [isEmailEntered, setIsEmailEntered] = useState(false)
  const [isEmailInUse, setIsEmailInUse] = useState(true)
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  const signInOrLogin = () => {
    setIsEmailEntered(true)
    // In here needs to be logic to see if the email
    // provided is in use already.
  }

  const signInDemoUser = () => {
    return dispatch(login('demo@aa.io', 'password'))
      .then(closeModal)
  }

  return (
    <>
      <i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={isEmailEntered ? (e) => setIsEmailEntered(false) : (e) => closeModal()} />
      <div id='login-container'>
        <h1 id="login-title">scrollr</h1>
        <form noValidate id='login-form' onSubmit={handleSubmit}>
          {isEmailEntered === false ?
            <>
              <h4 id='login-prompt'>Enter your email to log in or register:</h4>
              <label className="input-label">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button className='form-button' type='button' disabled={email === ''} onClick={(e) => signInOrLogin()}>
                Next
                <i className="fa-solid fa-arrow-right form-arrow-img" />
              </button>
            </>
            :
            false ?
            // isEmailInUse ?
              <>
                <h4>Welcome back to your corner of the internet.</h4>
                <h4>Glad you're here.</h4>
                <label className="input-label">
                  <input
                    className="input-field"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <button className="form-button" type="submit">
                  Log in
                  <i className="fa-solid fa-arrow-right form-arrow-img" />
                </button>
              </>
              :
              <>
                <h4>Welcome back to your corner of the internet.</h4>
                <h4>Glad you're here.</h4>
                <input
                  className="input-field"
                  type="password"
                  placeholder="Set a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Repeat password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button className='form-button' type='button'>
                  Next
                  <i className="fa-solid fa-arrow-right form-arrow-img" />
                </button>
              </>
          }
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </form>
        <p id='demo-user-sign-in' onClick={signInDemoUser}>demo user</p>
      </div>
    </>
  );
}

export default EmailFormModal;
