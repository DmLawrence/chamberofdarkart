import React from 'react';
import Logo from '../logo/Logo';
import './Welcome.css';

const Welcome = () => {
	return (
		<div className='tc w-100 flex flex-none justify-center items-center'>
			<Logo />
			<div>
				<h1 className='title'>Chamber of Dark Art</h1>
			</div>
		</div>
	);
}

export default Welcome;