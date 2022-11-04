import React from 'react';
import './card.css';

export default function Card(props) {
	return (
		<div className='card'>
			<div className='card-cover'>
				<img src={props.img} alt='activity' />
				<span className='tag'>sold out</span>
			</div>
			<div className='card-info'>
				<div className='card-info--stars'>
					<div className='reviews-location'>
						<img src='/images/star.png' alt='star' className='star' />
						<p>
							<span>{props.rating}</span>
							<span className='gray'> ({props.reviewCount}) • </span>
							<span className='gray'>{props.location}</span>
						</p>
					</div>
				</div>
				<div className='card-info-summary'>{props.title}</div>
				<div className='card-info--pricing'>
					<strong>From ${props.price}</strong> / person
				</div>
			</div>
		</div>
	);
}
