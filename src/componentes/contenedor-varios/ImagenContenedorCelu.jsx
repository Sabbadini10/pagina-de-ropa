import React from "react";

function ImagenContenedorCelu(props) {
	return (
		<div className='contenedor-varios-imagen'>
			<img className='contenedor-varios-imagen-celu' src={props.src} />
			<button className='contenedor-varios-boton-general contenedor-varios-boton-celu'><a className="contenedor-varios-texto" href={props.href}>
				<strong>{props.texto}</strong>
			</a></button>
		</div>
	);
}

export default ImagenContenedorCelu;
