import React from "react";

function ImagenContenedorDesktop(props) {
	return (
		<div className='contenedor-varios-imagen'>
			<img className='contenedor-varios-imagen-desktop' src={props.src} />
			<button className='contenedor-varios-boton-general contenedor-varios-boton-desktop'>
			<a className='contenedor-varios-texto' href={props.href}>
				<strong>{props.texto}</strong>
			</a>
			</button>
		</div>
	);
}

export default ImagenContenedorDesktop;
