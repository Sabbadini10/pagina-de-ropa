import React from "react";
import "./ImagenContenedorVarios.css";

function ImagenContenedorVarios(props) {
	return (
		<div className='contenedor-varios-imagen'>
			<img className='contenedor-varios-imagen-table' src={props.src} />
			<button className='contenedor-varios-boton-general contenedor-varios-boton-table'>
			<a className='contenedor-varios-texto' href={props.href}>
				<strong>{props.texto}</strong>
			</a>
			</button>
		</div>
	);
}

export default ImagenContenedorVarios;
