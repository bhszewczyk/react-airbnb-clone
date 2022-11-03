import React from 'react';
import './card.css';

export default function Card() {
	return (
		<div className='card'>
			<div className='card-cover'>
				<img src='/images/katie-zaferes.png' alt='Katie Zaferes' />
				<span className='tag'>sold out</span>
			</div>
			<div className='card-info'>
				<div className='card-info--stars'>
					<div className='reviews-location'>
						<img src='/images/star.png' alt='star' className='star' />
						<p>
							<span>5.0</span>
							<span className='gray'> (6) • </span>
							<span className='gray'>USA</span>
						</p>
					</div>
				</div>
				<div className='card-info-summary'>Life lessons with Katie Zaferes</div>
				<div className='card-info--pricing'>
					<strong>From $136</strong> / person
				</div>
			</div>
		</div>
	);
}
