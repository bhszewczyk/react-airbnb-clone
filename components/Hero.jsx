import React from 'react';
import './hero.css';

export default function Hero() {
	return (
		<section className='hero'>
			<img
				className='hero-image'
				src='images/photo-grid.png'
				alt='Photos of activities which can be done via AirBnb'
			/>
			<div className='hero-text'>
				<h1 className='title'>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</section>
	);
}
