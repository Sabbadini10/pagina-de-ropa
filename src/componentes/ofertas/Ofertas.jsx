import React from 'react';
import Titulos from '../titulos/Titulos';
import SliderOfertas from './SliderOfertas';

function Ofertas() {
    return (
        <div>
            <p className='ofertas-titulo-prenda text-muted mx-4'>PRENDA LIQUIDACION FINAL</p>
           <Titulos titulo="
           🔥 OFERTAS 🔥" /> 
           <SliderOfertas />
        </div>
    );
}

export default Ofertas;
