import React from "react";
import "./Banner.css";

function Banner() {
	return (
		<div className='contenedor-banner my-5'>
			<img
				className="banner-imagen"
				src='https://dummyimage.com/100x300/e31212/fff'
			/>
			<div className="contenedor-franja-banner d-flex flex-row justify-content-around mx-1">
				<div className="franja-banner texto-summer-hidden-1 text-center">
				🏊‍♂️🏖️🍹 New In Summer 🍹🏖️🏊‍♂️
				</div>
				<div className="franja-banner texto-summer-hidden-2 ">
				🏊‍♂️🏖️🍹 New In Summer 🍹🏖️🏊‍♂️
				</div>
				<div className="franja-banner texto-summer-hidden-3 ">
				🏊‍♂️🏖️🍹 New In Summer 🍹🏖️🏊‍♂️
				</div>
				<div className="franja-banner texto-summer-hidden-4">
				🏊‍♂️🏖️🍹 New In Summer 🍹🏖️🏊‍♂️
				</div>
			</div>
		</div>
	);
}

export default Banner;
