import React from 'react';

function Sidebar(props) {
    return (
        <div className={`sidebar ${props.isOpen ? 'open' : 'closed'}`}>
      <form className="header-form-buscador form">
							<input
								className="header-form-buscador-input form-control"
								type="search"
								placeholder="Search..."
								aria-label="Search"
							/>
							<button
								className="header-form-buscador-boton btn btn-border-none my-2 my-sm-0"
								type="submit"
							>
								<i className="header-form-buscador-icon  fa-solid fa-magnifying-glass"></i>
							</button>
						</form>
      <ul className="header-sidebar list-group ">
        <li className="dropdown header-ul-li py-2">
          <a className="header-texto-bars dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
           Categorias
          </a>
          <ul className="dropdown-menu bg-dark w-100">
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Abrigos & Casascas
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu  py-2">
											<a className=" dropdown-item" href="#">
												Accesorios
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Basicos
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Camisas & Blusas
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Denim y Drill
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Enterizos
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Faldas
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Pantalones
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Set
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Short
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Sudaderas & Poleras
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Tops & Polos
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Sueters
											</a>
										</li>
										
										<li className="header-ul-li-sub-menu py-2">
											<a className=" dropdown-item" href="#">
												Vestidos
											</a>
										</li>
										
									</ul>
									
        </li>
		<li className="header-ul-li py-2">
								<a className="header-texto-bars-2 header-texto-a" href="#">
									Lo Nuevo
								</a>
							</li>
							
							<li className="header-ul-li py-2">
								<a className="header-texto-bars-2 header-texto-a" href="#">
									Ver Todo
								</a>
							</li>
							
							<li className="header-ul-li py-2">
								<a className="header-texto-bars-2 header-texto-a" href="#">
									Sale
								</a>
							</li>
							
							<li className="header-ul-li py-2">
								<a className="header-texto-bars-2 header-texto-a" href="#">
									Tienda Fisica
								</a>
							</li>
							
							<li className="header-ul-li py-2">
								<a className="header-texto-bars-2 header-texto-a" href="#">
									Mayorista
								</a>
							</li>
							
      </ul>
    </div>
    );
}

export default Sidebar;
