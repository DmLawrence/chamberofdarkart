import React from 'react';

const Logo = () => {
	return (
		<div className='logo logo-fixed dib br3 pa2 ma2'>
			<div className='App-logo-welcome'>
				<img alt='Logo' src={require('./assets/circles.png')}  />
			</div>
		</div>
	);
}

export default Logo;