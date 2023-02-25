import React from "react";
import "./ImagenSiguenos.css";

function ImagenSiguenosTablet(props) {
	return (
		<div className='contenedor-imagen-siguenos-general'>
			<div className='contenedor-image-siguenos-tablet'>
			<img className='image-siguenos-tablet' src={props.src} />
			</div>
			
			<span>
				 <i class="image-siguenos-tablet-icon fa fa-clone" aria-hidden="true"></i>
			</span>
		</div>
	);
}

export default ImagenSiguenosTablet;
