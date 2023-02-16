import React from "react";
import Slider from "../slider/Slider";
import "./NuevoWeb.css";
import Titulos from "../titulos/Titulos";

function NuevoWeb() {
	return (
		<div className='nuevo-web-contenedor d-flex flex-column'>
			<Titulos titulo="NUEVO EN WEB 💬" />
			<Slider />
		</div>
	);
}

export default NuevoWeb;
