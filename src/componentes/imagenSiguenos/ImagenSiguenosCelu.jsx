import React from "react";
import "./ImagenSiguenos.css";

function ImagenSiguenosCelu(props) {
	return (
		<div className='contenedor-imagen-siguenos'>
			<img className='image-siguenos-celu' src={props.src} />
			<span>
				<i className="fa-solid fa-square"></i>
			</span>
		</div>
	);
}

export default ImagenSiguenosCelu;
