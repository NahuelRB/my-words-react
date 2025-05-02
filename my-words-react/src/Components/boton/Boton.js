import React from 'react';
import './Boton.css';
import { useState } from 'react';



function Boton(){
    const [count, setCount] = useState(0);
    function handleClick(){
        alert('Hiciste click')
       setCount(count + 1);
    }
    return(
        <button onClick={handleClick} className='botones'> Cantidad de clicks {count} </button>
    );
}

export default Boton;