import React from 'react';
import Logo from './Logo';

const Welcome = () => {
	return (
		<div className='tc w-100'>
			<Logo />
			<div>
				<h1 className='f-6 ma2'>Welcome</h1>
			</div>
		</div>
	);
}

export default Welcome;