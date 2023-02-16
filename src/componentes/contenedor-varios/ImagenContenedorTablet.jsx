import React from "react";
import "./ImagenContenedorVarios.css";

function ImagenContenedorVarios(props) {
	return (
		<div className='contenedor-varios-imagen'>
			<img className='contenedor-varios-imagen-table' src={props.src} />
			<a className='contenedor-varios-texto-table' href={props.href}>
				{props.texto}
			</a>
		</div>
	);
}

export default ImagenContenedorVarios;
