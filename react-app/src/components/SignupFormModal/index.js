import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [isEmailEntered, setIsEmailEntered] = useState(false);
	const [password, setPassword] = useState("");
	const [isPasswordEntered, setIsPasswordEntered] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isFirstAndLastNameEntered, setIsFirstAndLastNameEntered] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [username, setUsername] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const backtrack = () => {
		isEmailEntered ? setIsEmailEntered(false) : closeModal();
		setErrors([]);
	}

	const handleEmailSubmit = async (e) => {
		e.preventDefault();
		setIsEmailEntered(true);
	};

	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			setIsPasswordEntered(true);
		} else {
			setErrors(['password: Your passwords should match'])
		}
	};

	const handleFirstAndLastNameSubmit = async (e) => {
		e.preventDefault();
		setIsFirstAndLastNameEntered(true);
	}

	const handleSignUpSubmit = async (e) => {
		e.preventDefault();
		const data = await dispatch(signUp(username, email, password, firstName, lastName));
		if (data) {
			setErrors(data);
		} else {
			closeModal();
		}
	};

	return (
		<>
			<i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={backtrack} />
			<div id='sign-up-modal-container'>
				<h1 id="sign-up-title">scrollr</h1>
				<form noValidate className={isEmailEntered ? 'hidden sign-up-form' : 'sign-up-form'} onSubmit={handleEmailSubmit}>
					<h4 className="sign-up-form-text">Enter your email to log in or register:</h4>
					<label className="sign-up-input-label">
						<input
							className="sign-up-input-field"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<button className='sign-up-form-button' type='submit' disabled={email === ''}>
						Next
						<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
					</button>
				</form>

				<form noValidate className={isEmailEntered && (!isPasswordEntered) ? 'sign-up-form' : 'hidden sign-up-form'} onSubmit={handlePasswordSubmit}>
					<div className="sign-up-form-text-container">
						<h4 className="sign-up-form-text">Welcome back to your corner of the internet.</h4>
						<h4 className="sign-up-form-text">Glad you're here.</h4>
					</div>
					<label className="sign-up-input-label sign-up-password">
						<input
							className="sign-up-input-field"
							type="password"
							placeholder="Set a password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<label className="sign-up-input-label sign-up-password">
						<input
							className="sign-up-input-field"
							type="password"
							placeholder="Repeat password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</label>
					<button className='sign-up-form-button' type='submit' disabled={password === '' || confirmPassword === ''}>
						Next
						<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
					</button>
				</form>

				<form noValidate className={isPasswordEntered && (!isFirstAndLastNameEntered) ? 'sign-up-form' : 'hidden sign-up-form'} onSubmit={handleFirstAndLastNameSubmit}>
					<h4 className="sign-up-form-text">Everyone has a name. What's yours?</h4>
					<label className="sign-up-input-label sign-up-names">
						<input
							className="sign-up-input-field"
							type="text"
							placeholder="First name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</label>
					<label className="sign-up-input-label sign-up-names">
						<input
							className="sign-up-input-field"
							type="text"
							placeholder="Last name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</label>
					<button className='sign-up-form-button' type='submit' disabled={firstName === '' || lastName === ''}>
						Next
						<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
					</button>
				</form>

				<form noValidate className={isFirstAndLastNameEntered ? 'sign-up-form' : 'hidden sign-up-form'} onSubmit={handleSignUpSubmit}>
					<div className="sign-up-form-text-container">
						<h4 className="sign-up-form-text">What should we call you?</h4>
						<h5 className="sign-up-form-text">This will be how you appear to others on Scrollr, and your URL. Don't worry, you can change this later.</h5>
					</div>
					<label className="sign-up-input-label" id="sign-up-blog-name">
						<i className="fa-solid fa-at" id="sign-up-form-at" />
						<input
							className="sign-up-input-field"
							type="text"
							placeholder="Blog name"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</label>
					<button className='sign-up-form-button' type='submit' disabled={username === ''}>
						Sign up
						<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
					</button>
				</form>

				<ul id='sign-up-form-errors' className={errors.length ? '' : 'hidden'}>
					<i className="fa-solid fa-circle-exclamation" id='sign-up-errors-symbol' />
					<div id='sign-up-form-error-container'>
						{errors.map((error, idx) => (
							<li className='sign-up-form-error' key={idx}>{error}</li>
						))}
					</div>
				</ul>

			</div>
		</>
	);
}

export default SignupFormModal;
