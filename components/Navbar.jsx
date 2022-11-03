import React from 'react';
import './navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<img
				className='navbar-logo'
				src='/images/airbnb-logo.png'
				alt='AirBnb logo'
			/>
		</nav>
	);
}
