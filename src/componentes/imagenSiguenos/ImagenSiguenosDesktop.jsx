import React from "react";
import "./ImagenSiguenos.css";

function ImagenSiguenosDesktop(props) {
	return (
		<div className='contenedor-imagen-siguenos-general'>
			<div className='contenedor-image-siguenos-desktop'>
			<img className='image-siguenos-desktop' src={props.src} />
			</div>
			
			<span>
				<i className="image-siguenos-desktop-icon fa fa-clone"></i>
			</span>
		</div>
	);
}

export default ImagenSiguenosDesktop;
