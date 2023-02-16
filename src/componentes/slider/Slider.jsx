import React from 'react';
import './Slider.css';
import ImagenPrecio from '../imagen-precio/ImagenPrecio';
import Precio from '../imagen-precio/Precio';

const Slider = () => {
   return ( 
<div id="carouselExampleControls" className="carousel slide mb-5 d-flex justify-content-center" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active d-flex flex-row justify-content-center gap-4">
     <div className='text-center'>
     <ImagenPrecio className="slider-celu-imagen d-block" src="https://dummyimage.com/300x400/eb1aeb/fff" alt="First slide"/>
     <Precio nombre='Vestido Bora Maiz' precio='S/60.00'/>
     </div>
    <div className='text-center'>
<ImagenPrecio className="slider-tablet-imagen"  src="https://dummyimage.com/300x400/eb1aeb/fff" alt="First slide"/>
<Precio className='slider-tablet-precio' nombre='Vestido Luna Satin Perla' precio='S/60.00'/>
</div>
<div className='text-center'>
<ImagenPrecio className="slider-desktop-imagen" src="https://dummyimage.com/300x400/eb1aeb/fff" alt="First slide"/>
<Precio className='slider-desktop-precio' nombre='Vestido Safiye Manzana' precio='S/72.00'/>
</div>
<div className='text-center'>
<ImagenPrecio className="slider-desktop-imagen" src="https://dummyimage.com/300x400/eb1aeb/fff" alt="First slide"/>
<Precio className='slider-desktop-precio' nombre='Vestido Amaris Celeste' precio='S/65.00'/>
</div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only text-dark">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only text-dark">Next</span>
  </a>
</div>
  );
};

export default Slider;






