import React from "react";
import "./Siguenos.css";
import Titulos from "../titulos/Titulos";
import ImagenSiguenosCelu from "../imagenSiguenos/ImagenSiguenosCelu";
import ImagenSiguenosTablet from "../imagenSiguenos/ImagenSiguenosTablet";
import ImagenSiguenosDesktop from "../imagenSiguenos/ImagenSiguenosDesktop";

function Siguenos() {
	return (
		<div className='d-flex flex-column'>
			<p className='text-muted px-2'>INSTAGRAM</p>
			<Titulos
				titulo='
SÍGUENOS EN @loveboo.pe'
			/>
			<div className='contenedor-siguenos-imagenes d-flex flex-row align-items-center justify-content-center px-5 my-2  gap-1'>
				<ImagenSiguenosCelu src='https://dummyimage.com/230x200/6b5a5a/fff' />
				<ImagenSiguenosTablet src='https://dummyimage.com/230x200/f01818/fff' />
				<ImagenSiguenosTablet src='https://dummyimage.com/230x200/969696/fff' />
				<ImagenSiguenosDesktop src='https://dummyimage.com/230x200/ed13ed/fff' />
				<ImagenSiguenosDesktop src='https://dummyimage.com/230x200/152beb/fff' />
			</div>
		</div>
	);
}

export default Siguenos;
