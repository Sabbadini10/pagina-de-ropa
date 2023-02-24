import React from "react";
import "./Slider.css";
import ImagenPrecio from "../imagen-precio/ImagenPrecio";
import Precio from "../imagen-precio/Precio";

const Slider = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide mb-5 d-flex justify-content-center mx-1"
			data-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active d-flex flex-row justify-content-center ">
					<div className='contenedor-celu-imagen text-center'>
						<ImagenPrecio
							className="slider-celu-imagen d-block mx-2"
							src="https://dummyimage.com/300x400/eb1aeb/fff"
							alt="First slide"
						/>
						<Precio className='slider-celu-precio'
						nombre='Vestido Bora Maiz' precio='S/60.00' />
					</div>
					<div className='contenedor-celu-imagen text-center'>
						<ImagenPrecio
							className="slider-celu-imagen d-block mx-2"
							src="https://dummyimage.com/300x400/eb1aeb/fff"
							alt="First slide"
						/>
						<Precio
							className='slider-celu-precio'
							nombre='Vestido Luna Satin Perla'
							precio='S/40.00'
						/>
					</div>
					<div className='contenedor-tablet-imagen text-center'>
						<ImagenPrecio
							className="slider-tablet-imagen mx-2"
							src="https://dummyimage.com/300x400/eb1aeb/fff"
							alt="First slide"
						/>
						<Precio
							className='slider-tablet-precio'
							nombre='Short Drill Beige'
							precio='S/65.00'
						/>
					</div>
					<div className='contenedor-desktop-imagen text-center'>
						<ImagenPrecio
							className="slider-desktop-imagen"
							src="https://dummyimage.com/300x400/eb1aeb/fff"
							alt="First slide"
						/>
						<Precio
							className='slider-desktop-precio'
							nombre='Vestido Safiye Manzana'
							precio='S/72.00'
						/>
					</div>
				</div>
			</div>
			<div className="contenedor-slider-botones">
			<a
				className="carousel-control-prev"
				href="#carouselExampleControls"
				role="button"
				data-slide="prev"
			>
				<span className="carousel-prev" aria-hidden="true"><i className="fa-solid fa-angle-left"></i></span>
			</a>
			<a
				class="carousel-control-next"
				href="#carouselExampleControls"
				role="button"
				data-slide="next"
			>
				<span className="carousel-next" aria-hidden="true"><i className="fa-solid fa-angle-right"></i></span>
			</a>
			</div>
			
		</div>
	);
};

export default Slider;
