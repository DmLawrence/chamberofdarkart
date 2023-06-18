import React from 'react';

const Canvas = ({ title, art }) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt={`Artwork titled: ${title}`} src={art} />
			<div>
				<h2>{title}</h2>
			</div>
		</div>
	);
}

export default Canvas;