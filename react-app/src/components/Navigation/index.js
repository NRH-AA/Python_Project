import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id='navbar'>
			<div id='navbar-left'>
				<NavLink exact to="/" id='logo'>S</NavLink>
			</div>
			{isLoaded && (
				<div id='navbar-right'>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
