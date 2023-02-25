import React from "react";

function Precio(props) {
	return (
		<div className='d-flex flex-column'>
			<a className={props.className} href={props.href}>
				{props.nombre}
			</a>
			<div className='d-flex flex-row justify-content-center gap-2'>
				<del className={props.className}>{props.descuento}</del>
				<p className={props.className}>{props.precio}</p>
			</div>
		</div>
	);
}

export default Precio;
