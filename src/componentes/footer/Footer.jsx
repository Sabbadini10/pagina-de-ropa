import React from 'react';
import './Footer.css'

function Footer() {
    return (
    <footer class="footer bg-dark mt-5 d-flex flex-column">
  <div class="container-footer mx-2">
    <div className='d-flex flex-column'>
    <h2 className="text-light mb-3">LOVEBOO</h2>
    </div>
    <div className='contenedor-footer-1'>
        <h5 className='text-light mb-3'>
            NOSOTROS
        </h5>
        <a className="text-light" href='#'>TIENDAS FISICAS</a>
        <a className="text-light" href='#'>TRABAJA CON NOSOTROS</a>
    </div>
    <div className='contenedor-footer-2'>
        <h5 className='text-light mb-3'>TIENDA</h5>
        <a className="text-light" href='#'>SHOP</a>
        <a className="text-light" href='#'>SALE</a>
        <a className="text-light" href='#'>MAYORISTA</a>
    </div>
    <div className='contenedor-footer-3'>
        <h5 className='text-light mb-3'>INFORMACION</h5>
        <a className="text-light" href='#'>TERMINOS Y CONDICIONES</a>
        <a className="text-light" href='#'>POLITICAS DE PRIVACIDAD</a>
        <a className="text-light" href='#'>ENVIOS CAMBIOS Y DEVOLUCIONES</a>
    </div>
  </div>
  <div className='text-ligth bg-danger mt-5'>
  <div className='d-flex flex-row justify-content-center gap-3 px-3'>
    <span><i className="fa-brands fa-facebook"></i></span>
    <span><i className="fa-brands fa-instagram"></i></span>
  </div>
        <p className='text-center'>© 2022 TODOS LOS DERECHOS RESERVADOS POR LOVEBOO. DESARROLLADO POR MATIAS SABBADINI</p>
    </div>
</footer>
    );
}

export default Footer;
