import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer class="footer mt-5 d-flex flex-column">
			<div class="container-footer">
			<div className="contenedor-footer-loveboo">
		<img src="https://loveboo.pe/wp-content/uploads/2022/03/logofooter.png" className='footer-loveboo'/>
		</div>
				<div className='contenedor-footer-1 mb-5'>
					<h4 className='contenedor-footer-subtitulo text-light mb-2'>NOSOTROS</h4>
					<ul className="contenedor-footer-ul">
						<li>
					<a className="contenedor-footer-a text-light" href='#'>
						TIENDAS FISICAS
					</a>
					</li>
						<li>
					<a className="contenedor-footer-a text-light" href='#'>
						TRABAJA CON NOSOTROS 💬
					</a>
					</li>
						</ul>
				</div>
				<div className='contenedor-footer-2 mb-5'>
					<h4 className='contenedor-footer-subtitulo text-light mb-2'>TIENDA</h4>
					<ul className="contenedor-footer-ul">
					<li>
						<a className="contenedor-footer-a text-light" href='#'>
						SHOP
					</a>
					</li>
					<li>
					<a className="contenedor-footer-a text-light" href='#'>
						SALE
					</a>
					</li>
					<li>
					<a className="contenedor-footer-a text-light" href='#'>
						MAYORISTA
					</a>
					</li>
					</ul>
				</div>
				<div className='contenedor-footer-3 mb-5'>
					<h4 className='contenedor-footer-subtitulo text-light mb-2'>INFORMACION</h4>
					<ul className="contenedor-footer-ul">
						<li>
						<a className="contenedor-footer-a text-light" href='#'>
						TERMINOS Y CONDICIONES
					</a>
						</li>
					<li><a className="contenedor-footer-a text-light" href='#'>
						POLITICAS DE PRIVACIDAD
					</a></li>
					<li>
					<a className="contenedor-footer-a text-light" href='#'>
						ENVIOS, CAMBIOS Y DEVOLUCIONES
					</a>
					</li>
					</ul>
				</div>
			</div>
			<div className='contenedor-footer-4'>
				<div className='d-flex flex-row justify-content-center gap-3 px-3'>
					<span>
						<i className="fa-brands fa-facebook"></i>
					</span>
					<span>
						<i className="fa-brands fa-instagram"></i>
					</span>
				</div>
				<p className='text-center'>
					© 2023 TODOS LOS DERECHOS RESERVADOS POR LOVEBOO. DESARROLLADO POR
					<a className="text-white mx-1" href="https://portafolio-matias-sabbadini.vercel.app/">MATIAS SABBADINI</a>
					
				</p>
			</div>
		</footer>
	);
}

export default Footer;
