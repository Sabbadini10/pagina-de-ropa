import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header className="container">
         <div className='contenedor-header-1 bg-dark py-2 row'>
        <h6 className='titulo-header text-center text-white'>❤ VALENTINE`S DAYS ❤</h6>
    </div>
    <div className='contenedor-header-2 row'>
<p className='titulo-header text-center text-dark py-2'>
    20% OFF EN TODOS LOS PRODUCTOS <br/>
    codigo: LOVEDAYS
</p>
    </div>
    <div className='contenedor-header-3 row'>
        <nav class="Navbar-contenedor navbar navbar-expand-lg col-md-1 navbar-light py-2 d-flex flex-row justify-content-around align-items-center">

  <div className="d-flex flex-row gap-2 align-items-center row">
    <ul className="navbar-nav mr-auto align-items-center col-md-1">
        <li className="nav-item active align-items-center">
        <div className="dropdown align-items-center">
         <a href="#" className="d-flex align-items-center text-dark text-decoration-none px-1 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
          Categorias
          </a>
          <ul className="dropdown-menu dropdown-menu-dark  shadow">
            <li><a className="dropdown-item" href="#">Abrigos & Casascas</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
            <li><a className="dropdown-item" href="#">Basicos</a></li>
            <li><a className="dropdown-item" href="#">Camisas & Blusas</a></li>
            <li><a className="dropdown-item" href="#">Denim y Drill</a></li>
            <li><a className="dropdown-item" href="#">Enterizos</a></li>
            <li><a className="dropdown-item" href="#">Faldas</a></li>
            <li><a className="dropdown-item" href="#">Pantalones</a></li>
            <li><a className="dropdown-item" href="#">Set</a></li>
            <li><a className="dropdown-item" href="#">Short</a></li>
            <li><a className="dropdown-item" href="#">Sudaderas & Poleras</a></li>
            <li><a className="dropdown-item" href="#">Tops & Polos</a></li>
            <li><a className="dropdown-item" href="#">Sueters</a></li>
            <li><a className="dropdown-item" href="#">Vestidos</a></li>
          </ul>
        </div>
        </li>
    
      <li className="nav-item active">
        <a className="header-texto-a nav-link" href="#">Lo Nuevo</a>
      </li>
      <li className="nav-item">
        <a className="header-texto-a nav-link" href="#">Ver Todo</a>
      </li>
    </ul>
    </div>
    <h1 className='header-loveboo text-center align-items-center col-md-1'>LOVEBOO</h1>
    <div className='d-flex flex-row gap-2 align-items-center row'>
    <ul className="navbar-nav mr-auto col-md-1">
      <li className="nav-item active">
        <a className="header-texto-a nav-link" href="#">Sale</a>
      </li>
      <li className="nav-item active">
        <a className="header-texto-a nav-link" href="#">Tienda Fisica</a>
      </li>
      <li className="nav-item">
        <a className="header-texto-a nav-link" href="#">Mayorista</a>
      </li>
    </ul>
    </div>
    
 
  <div className='d-flex flex-row gap-2 align-items-center col-md-1'>
  <form className="form my-2 my-lg-0 ">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" hidden aria-label="Search"/>
      <button className="btn btn-border-none my-2 my-sm-0" type="submit"><i className="header-texto-a fa-solid fa-magnifying-glass"></i></button>
    </form>
    <span><i className="header-texto-a fa-solid fa-user"></i></span>
    <span><i className="header-texto-a fa-solid fa-cart-shopping"></i></span>
  </div>
</nav>
</div>
    </header>
   
  )
}

export default Header;
