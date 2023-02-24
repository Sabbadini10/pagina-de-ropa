import React, { useState } from "react";
import "./Header.css";
import Boton from "../../sidebar/Boton";
import Sidebar from "../../sidebar/Sidebar";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenBoton, setIsOpenBoton] = useState(false);
	const [isChange, setIsChange] = useState(<span className="open header-icon-bars text-dark"><i class="fa-solid fa-bars"></i></span>);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
	setIsOpenBoton(!isOpenBoton)
	if(!isOpen){
	setIsChange(<span className="closed header-icon-bars text-dark"><i class="fa-solid fa-xmark"></i></span>)
	}else if(isOpen){
	setIsChange(<span className="open header-icon-bars text-dark"><i class="fa-solid fa-bars"></i></span>)
	}
};

 
  
	return (
		<header>
			<div className='contenedor-header-1 bg-dark py-2 '>
			
				<p className='titulo-header1 text-center text-white'>
					Envios Gratis Apartir de S/300
				</p>
				
			</div>
			<div className='contenedor-header-2 '>
				<p className='titulo-header2 text-center text-dark py-2'>
					Nuevas prendas agregadas al carrusel de ofertas
				</p>
			</div>
			<div className='contenedor-header-3 '>
					
					<Sidebar isOpen={isOpen}/>
					<div className="contenedor-header-redes-desktop-1090">
						<ul className="d-flex flex-row gap-4 align-items-center">
							<li>
							<a href="#"><i class="text-dark fa-brands fa-facebook"></i></a>
						</li>
						<li>
							<a href="#"><i class="text-dark fa-brands fa-instagram"></i></a>
						</li>
						<li>
							<a href="#"><i class="text-dark fa-brands fa-yelp"></i></a>
						</li>
						</ul>
						</div>
      <ul className="contenedor-header-navbar">
        <li className="dropdown py-2">
          <a className="header-texto-a dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
           Categorias
          </a>
          <ul className="dropdown-menu bg-dark w-100">
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Abrigos & Casascas
											</a>
										</li>
										
										<li className=" py-2">
											<a className=" dropdown-item" href="#">
												Accesorios
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Basicos
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Camisas & Blusas
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Denim y Drill
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Enterizos
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Faldas
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Pantalones
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Set
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Short
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Sudaderas & Poleras
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Tops & Polos
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Sueters
											</a>
										</li>
										
										<li className="py-2">
											<a className=" dropdown-item" href="#">
												Vestidos
											</a>
										</li>
										
									</ul>
									
        </li>
		<li className="py-2">
								<a className="header-texto-a" href="#">
									Lo Nuevo
								</a>
							</li>
							
							<li className="py-2">
								<a className="header-texto-a" href="#">
									Ver Todo
								</a>
							</li>
							
							<li className="header-li-desktop py-2">
								<a className="header-texto-a" href="#">
									Sale
								</a>
							</li>
							</ul>
							
							<div className="contenedor-header-redes-desktop">
  <div className="contenedor-header-redes">
						<ul className="d-flex flex-row gap-4 align-items-center">
							<li>
							<a href="#"><i class="text-dark fa-brands fa-facebook"></i></a>
						</li>
						<li>
							<a href="#"><i class="text-dark fa-brands fa-instagram"></i></a>
						</li>
						<li>
							<a href="#"><i class="text-dark fa-brands fa-yelp"></i></a>
						</li>
						</ul>
						</div>
							<div className="contenedor-imagen-loveboo-desktop">
		<img src="https://loveboo.pe/wp-content/uploads/2022/03/logoloveboo.jpg" className='header-loveboo text-center align-items-center '/>
		</div>
		
		<div className='header-contenedor-iconos-desktop'>
						<div>
						<form className="form">
							<input
								className="form-control"
								type="search"
								placeholder="Search"
								hidden
								aria-label="Search"
							/>
							<button
								className="boton-lupa btn btn-border-none"
								type="search"
							>
								<i className="header-texto-icon fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
						</div>
						
						<div>
						<span>
							<i className="header-texto-icon fa-solid fa-user"></i>
						</span>
						</div>
							<div>
							<span>
							<i className="header-texto-icon fa-solid fa-cart-shopping"></i>
						</span>
							</div>
						
						</div>
						</div>
						<div className="contenedor-tienda-mayorista-desktop-1090">
						<ul  className="contenedor-tienda-mayorista-1090">
		<li className="">
								<a className="header-texto-a" href="#">
									Sale
								</a>
							</li>
							<li className="">
								<a className="header-texto-a" href="#">
									Tienda Fisica
								</a>
							</li>
							
							<li className="">
								<a className="header-texto-a" href="#">
									Mayorista
								</a>
							</li>
							
      </ul>
						</div>
		
		<div className="contenedor-tienda-mayorista-desktop">
		<ul  className="contenedor-tienda-mayorista">
							<li className="">
								<a className="header-texto-a" href="#">
									Tienda Fisica
								</a>
							</li>
							
							<li className="">
								<a className="header-texto-a" href="#">
									Mayorista
								</a>
							</li>
							
      </ul>
		</div>
	
					
					
	<div className="boton-sidebar-hidden">
	<Boton onClick={toggleSidebar} isOpenBoton={isOpenBoton} isChange={isChange} />
  </div>
  
  <div className="contenedor-imagen-loveboo">
		<img src="https://loveboo.pe/wp-content/uploads/2022/03/logoloveboo.jpg" className='header-loveboo align-items-center '/>
		</div>
					<div className='header-nav-hidden flex-row gap-2 align-items-center'>
						<ul className="navbar-nav mr-auto ">
						<li className="nav-item active">
								<a className="header-texto-a nav-link" href="#">
									Sale
								</a>
							</li>
							<li className="nav-item active">
								<a className="header-texto-a nav-link" href="#">
									Tienda Fisica
								</a>
							</li>
							<li className="nav-item">
								<a className="header-texto-a nav-link" href="#">
									Mayorista
								</a>
							</li>
						</ul>
					</div>

					<div className='header-contenedor-iconos'>
						<form className="form my-2">
							<input
								className="form-control"
								type="search"
								placeholder="Search"
								hidden
								aria-label="Search"
							/>
							<button
								className="boton-lupa btn btn-border-none my-2"
								type="submit"
							>
								<i className="header-texto-icon fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
						
							<span>
							<i className="header-texto-icon fa-solid fa-user"></i>
						</span>
						<span>
							<i className="header-texto-icon fa-solid fa-cart-shopping"></i>
						</span>
						</div>
						
				
  
				
			</div>
			
			
		</header>
	);
}

export default Header;
