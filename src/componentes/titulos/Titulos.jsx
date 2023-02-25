import React from "react";
import "./Titulos.css";

function Titulos(props) {
	return (
		<div className='d-flex flex-column'>
			<div className='contenedor-titulo-boton'>
				<h2 className='titulos-nombre'><strong>{props.titulo}</strong></h2>
				<button className='btn boton-ver-mas'><p className="titulos-boton-parrafo">Ver mas +</p></button>
			</div>
			<hr />
		</div>
	);
}

export default Titulos;
