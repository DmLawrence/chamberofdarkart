import React from 'react';
import Circles from './circles.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='logo logo-fixed dib'>
			<div className='App-logo-welcome'>
				<img alt='Logo' src={Circles}  />
			</div>
		</div>
	);
}

export default Logo;