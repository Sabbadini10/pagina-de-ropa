import React from 'react';


function Boton(props) {
  
  return (
    <button className={`boton-bars ${props.isOpenBoton ? 'open' : 'closed'}`} onClick={props.onClick} >
      {props.isChange}
    </button>
  );
}

export default Boton;

