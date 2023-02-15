import React from 'react';
import ImagenContenedorTablet from './ImagenContenedorTablet';
import './ImagenContenedorVarios.css'
import ImagenContenedorCelu from './ImagenContenedorCelu';
import ImagenContenedorDesktop from './ImagenContenedorDesktop';

function ContenedorVarios(){
    return (
        <div className='contenedor-varios mb-3 d-flex flex-row justify-content-between gap-3 align-items-end'>
            <ImagenContenedorCelu src='https://dummyimage.com/200x200/3112e3/fff'  href='#' texto='BASICOS DE SIEMPRE'/>
            <ImagenContenedorTablet src='https://dummyimage.com/200x200/e34a12/fff' href='#' texto='TODOS LOS PRODUCTOS'/>
            <ImagenContenedorDesktop  src='https://dummyimage.com/100x100/e31212/fff' href='#' texto='DENIM & DRILL'/>
        </div>
    );
}

export default ContenedorVarios;
