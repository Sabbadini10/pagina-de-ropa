import React from "react";
import "./ImagenSiguenos.css";

function ImagenSiguenosTablet(props) {
	return (
		<div className='contenedor-imagen-siguenos'>
			<img className='image-siguenos-tablet' src={props.src} />
			<span>
				<i className="image-siguenos-tablet-icon fa-solid fa-square"></i>
			</span>
		</div>
	);
}

export default ImagenSiguenosTablet;
