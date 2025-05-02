import './App.css';
//import Boton from './Components/boton/Boton';
import Lista from './Components/funciones/Lista'
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Practicando</h1>

        <Lista/>
     
      </header>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Hiciste clic {count} veces
    </button>
  );
}

