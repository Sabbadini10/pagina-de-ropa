import React from 'react';

function Precio(props) {
    return (
        <div className='d-flex flex-column'>
            <a href={props.href}>{props.nombre}</a>
            <div className='d-flex flex-row gap-1 justify-content-center'>
            <del className="text-muted">{props.descuento}</del>
            <p>{props.precio}</p>
            </div>
           
        </div>
    );
}

export default Precio;
