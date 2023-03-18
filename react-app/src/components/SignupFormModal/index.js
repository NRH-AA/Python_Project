import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { emailExists } from "../../store/user";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [isEmailEntered, setIsEmailEntered] = useState(false);
	const [password, setPassword] = useState("");
	const [isPasswordEntered, setIsPasswordEntered] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [username, setUsername] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const backtrack = () => {
		isPasswordEntered ? setIsPasswordEntered(false)
			:
			isEmailEntered ? setIsEmailEntered(false)
				:
				closeModal();
		setErrors([]);
	}

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
		if (!emailReturn || emailReturn.errors) {
			setIsEmailEntered(true)
		} else {
			return setErrors(['Email already in use.'])
		}
	};

	const handlePasswordSubmit = async (e) => {
		if (e) e.preventDefault();

		if (!password || password.length < 6) return setErrors(['Password must be 6 characters or more']);

		if (password !== confirmPassword) return setErrors(['password: Your passwords should match'])

		setIsPasswordEntered(true);
	};

	const handleSignUpSubmit = async (e) => {
		if (e) e.preventDefault();

		if (!username || username.length < 4) return setErrors(['Username must be 4 characters or more']);

		const data = await dispatch(signUp(username, email, password));
		if (data) return setErrors(data);

		closeModal();
	};
	
	const tabSubmitEmail = (e) => e.key === "Tab" && handleEmailSubmit(e);
	const tabSumbitPassword = (e) => e.key === "Tab" && handlePasswordSubmit(e);
	const tabSumbitSignup = (e) => e.key === "Tab" && handleSignUpSubmit(e);
	
	
	const showEmailForm = () => {
		return (
			<form noValidate className={isEmailEntered ? 'hidden sign-up-form' : 'sign-up-form'} onSubmit={handleEmailSubmit}>
				<h4 className="sign-up-form-text">Enter the email you would like to register:</h4>
				<label className="sign-up-input-label">
					<input
						className="sign-up-input-field"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoFocus={!isEmailEntered && true}
						onKeyDown={(e) => tabSubmitEmail(e)}
						required
					/>
				</label>
				<button className='sign-up-form-button' type='submit' disabled={email === ''} onClick={(e) => setErrors([])}>
					Next
					<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
				</button>
			</form>
		);
	};
	
	const showPasswordForm = () => {
		return (
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
					autoFocus={true}
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
					onKeyDown={(e) => tabSumbitPassword(e)}
					required
				/>
			</label>
			<button className='sign-up-form-button' type='submit' disabled={password === '' || confirmPassword === ''} onClick={(e) => setErrors([])}>
				Next
				<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
			</button>
			</form>
		);
	};
	
	const showUsernameForm = () => {
		return (
			<form noValidate className={isPasswordEntered ? 'sign-up-form' : 'hidden sign-up-form'} onSubmit={handleSignUpSubmit}>
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
						onKeyDown={(e) => tabSumbitSignup(e)}
						autoFocus={true}
						required
					/>
				</label>
				<button className='sign-up-form-button' type='submit' disabled={username === ''}>
					Sign up
					<i className="fa-solid fa-arrow-right sign-up-form-arrow-img" />
				</button>
			</form>
		);
	};
	
	

	return (
		<div id="sign-up-modal-container-container">
			<i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={backtrack} />
			<div id='sign-up-modal-container'>
				<h1 id="sign-up-title">Scrollr</h1>
				
				{!isEmailEntered ? showEmailForm() : ""}
				{isEmailEntered && !isPasswordEntered ? showPasswordForm() : ""}
				{isEmailEntered && isPasswordEntered ? showUsernameForm() : ""}
				
				<ul id='sign-up-form-errors' className={errors.length ? '' : 'hidden'}>
					<i className="fa-solid fa-circle-exclamation" id='sign-up-errors-symbol' />
					<div id='sign-up-form-error-container'>
						{errors.map((error, idx) => (
							<li className='sign-up-form-error' key={idx}>{error}</li>
						))}
					</div>
				</ul>

			</div>
		</div>
	);
}

export default SignupFormModal;
