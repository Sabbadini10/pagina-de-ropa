import React from "react";
import "./ImagenDescripcion.css";

function ImagenDescripcion() {
	return (
		<div className='mb-1 contenedor-imagen-descripcion'>
			<img
				className='imagen-descripcion-imagen'
				src='https://dummyimage.com/319x400/6b5a5a/fff'
			/>
			<div className="contenedor-imagen-descripcion-parrafo ">
			<div className="contenedor-imagen-descripcion-hr"><h4 className="imagen-descripcion-hr" ></h4></div>
			<h6 className="imagen-descripcion-titulo mb-3"><strong>LOVEBOO</strong></h6> 
			<p className='imagen-descripcion-parrafo text-dark bg-white'>
				
				Es ese espacio donde puedes 
				encontrar el outfit perfecto para cualquier tipo de 
				ocasión y lo más importante sintiéndote 
				cómoda. En Loveboo queremos mostrar lo 
				cómodo y cool que es vestir con nuestras 
				prendas en cada temporada.🖤
				<br />
				<br />
				Recuerda que ahora en la web puedes
				llegar a filtrar tu talla para facilitar aún 
				más tu compra 🙌🏻
			</p>
			</div>
			
		</div>
	);
}

export default ImagenDescripcion;
