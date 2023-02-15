import React from 'react';

function ImagenContenedorDesktop(props)  {
    return (
        <div className='contenedor-varios-imagen'>
        <img className='contenedor-varios-imagen-desktop' src={props.src}/>
        <a className='contenedor-varios-texto-desktop' href={props.href}>{props.texto}</a>
    </div>
    );
}

export default ImagenContenedorDesktop;
