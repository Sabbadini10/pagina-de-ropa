import React from "react";

function ImagenContenedorCelu(props) {
	return (
		<div className='contenedor-varios-imagen'>
			<img className='contenedor-varios-imagen-celu' src={props.src} />
			<a className='contenedor-varios-texto-celu' href={props.href}>
				{props.texto}
			</a>
		</div>
	);
}

export default ImagenContenedorCelu;
