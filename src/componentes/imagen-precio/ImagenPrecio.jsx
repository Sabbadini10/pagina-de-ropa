import React from "react";

function ImagenPrecio(props) {
	return (
		<div className='my-2'>
			<img className={props.className} src={props.src} />
		</div>
	);
}

export default ImagenPrecio;
