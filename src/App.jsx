import './App.css'
import { useRef } from 'react'
import { useState } from 'react';

const App = () => {
  const eurosRef = useRef();
  const [dolares, setDolares] = useState(0);

  const convertirEuroDolar = () => {
    setDolares(eurosRef.current.value*2);
  }
  return (
    <div className='w3-container w3-khaki'>
    <input type="text" ref={eurosRef} />
    <button onClick={convertirEuroDolar}>Convertir</button>
    <div className='w3-badge w3-sand'>{dolares}</div>
    </div>
  )
}
export default App