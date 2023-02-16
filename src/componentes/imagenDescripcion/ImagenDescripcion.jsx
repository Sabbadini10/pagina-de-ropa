import React from "react";
import "./ImagenDescripcion.css";

function ImagenDescripcion() {
	return (
		<div className='mb-1 contenedor-imagen-descripcion'>
			<img
				className='imagen-descripcion-imagen'
				src='https://dummyimage.com/319x400/6b5a5a/fff'
			/>
			<p className='contenedor-imagen-descripcion-parrafo text-dark bg-white py-3 px-3'>
				<strong>LOVEBOO</strong> <br /> <br />
				Es ese espacio donde puedes encontrar el <br />
				outfit perfecto para cualquier tipo de <br />
				ocasión y lo más importante sintiéndote <br />
				cómoda. En Loveboo queremos mostrar lo <br />
				cómodo y cool que es vestir con nuestras <br />
				prendas en cada temporada.🖤
				<br />
				<br />
				Recuerda que ahora en la web puedes <br />
				llegar a filtrar tu talla para facilitar aún <br />
				más tu compra 🙌🏻
			</p>
		</div>
	);
}

export default ImagenDescripcion;
