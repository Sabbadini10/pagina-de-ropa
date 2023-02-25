import React from "react";
import Header from "../componentes/header/Header";
import Banner from "../componentes/banner/Banner";
import NuevoWeb from "../componentes/nuevo-web/NuevoWeb";
import ContenedorVarios from "../componentes/contenedor-varios/ContenedorVarios";
import Ofertas from "../componentes/ofertas/Ofertas";
import ImagenDescripcion from "../componentes/imagenDescripcion/ImagenDescripcion";
import Siguenos from "../componentes/siguenos/Siguenos";
import Footer from "../componentes/footer/Footer";
import "../App.css";

function Home() {
	return (
		<div className='contenedor-home'>
			<Header />
			<Banner />
			<NuevoWeb/>
			<ContenedorVarios />
			<Ofertas />
			<ImagenDescripcion />
			<Siguenos />
		</div>
	);
}

export default Home;
