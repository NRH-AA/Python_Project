import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, postSearchPosts } from '../../store/posts';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const ulRef = useRef();
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [showSearchMenu, setShowSearchMenu] = useState(false);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		if (!showSearchMenu) return;

		const closeMenu = (e) => {
			if (!ulRef.current?.contains(e.target)) {
				setShowSearchMenu(false);
			}
		};

		document.addEventListener("click", closeMenu);

		return () => document.removeEventListener("click", closeMenu);
	}, [showSearchMenu]);

	const handleSearch = (type) => {
		dispatch(postSearchPosts(searchInput, type));
	};

	return (
		<>
			<div id='navbar'>
				<div id='navbar-left'>
					<NavLink exact to="/" id='logo' onClick={() => {
						dispatch(getPosts())
						window.scrollTo(0, 0)
					}}>S</NavLink>
					<div id='searchbar-container'>
						<i id='search-icon' className="fa-solid fa-magnifying-glass" />
						<input id='searchbar'
							type='text'
							placeholder='Search Scrollr'
							onClick={() => setShowSearchMenu(true)}
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
						/>
						<div id='searchbar-options' className={showSearchMenu ? "" : "hidden"}>
							<p className='searchbar-option' onClick={() => handleSearch("recent")}>
								Most Recent
							</p>
							<p className='searchbar-option' onClick={() => handleSearch("popular")}>
								Most Popular
							</p>
							<p className='searchbar-option bottom' onClick={() => handleSearch("user")}>
								By User
							</p>
						</div>
					</div>
				</div>
				{isLoaded && (
					<div id='navbar-right-logged-out'>
						<ProfileButton user={sessionUser} />
					</div>
				)}
			</div >
			<div id='takes-up-space'></div>
		</>
	);
}

export default Navigation;
