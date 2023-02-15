import React from 'react';
import './ImagenSiguenos.css'

function ImagenSiguenosDesktop(props) {
    return (
        <div className='contenedor-imagen-siguenos'>
            <img  className='image-siguenos-desktop' src={props.src}/>
            <span><i className="image-siguenos-desktop-icon fa-solid fa-square"></i></span>
        </div>
    );
}

export default ImagenSiguenosDesktop;