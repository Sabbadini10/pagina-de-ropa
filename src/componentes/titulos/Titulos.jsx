import React from "react";
import "./Titulos.css";

function Titulos(props) {
	return (
		<div className='d-flex flex-column'>
			<div className='d-flex flex-row justify-content-between my-1 px-3'>
				<h2 className='titulos-nombre'>{props.titulo}</h2>
				<button className='btn'>Ver mas +</button>
			</div>
			<hr />
		</div>
	);
}

export default Titulos;
