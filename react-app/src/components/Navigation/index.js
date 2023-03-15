import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<>
			<div id='navbar'>
				<div id='navbar-left'>
					<NavLink exact to="/" id='logo'>S</NavLink>
					<div id='searchbar-container'>
						<i id='search-icon' className="fa-solid fa-magnifying-glass" onClick={() => window.alert("Search feature coming soon maybe.")} />
						<input id='searchbar' type='text' placeholder='Search Scrollr'></input>
					</div>
				</div>
				{isLoaded && (
					<div id='navbar-right-logged-out'>
						<ProfileButton user={sessionUser} />
					</div>
				)}
			</div>
			<div id='takes-up-space'></div>
		</>
	);
}

export default Navigation;
