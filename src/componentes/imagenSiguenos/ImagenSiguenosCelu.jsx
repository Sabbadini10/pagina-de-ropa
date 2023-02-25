import React from "react";
import "./ImagenSiguenos.css";

function ImagenSiguenosCelu(props) {
	return (
		<div className='contenedor-imagen-siguenos-general'>
			<div className='contenedor-image-siguenos-celu'>
			<img className='image-siguenos-celu' src={props.src} />
			</div>
			
			<span>
				<i className="image-siguenos-celu-icon fa fa-clone"></i>
			</span>
		</div>
	);
}

export default ImagenSiguenosCelu;
