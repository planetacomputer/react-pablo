import './App.css'
import { useRef, useState } from 'react'
const App = () => {
  const anchoRef = useRef();
  const altoRef = useRef();
  const [superficie, setSuperficie] = useState(0);

  const calcularSuperficie = () => {
    setSuperficie(anchoRef.current.value * altoRef.current.value);
  }
  
  return (
    <div className='w3-container w3-khaki'>
    <input type="text" ref={anchoRef} />
    <input type="text" ref={altoRef} />
    <button onClick={calcularSuperficie}>Calcular</button>
    <div className='w3-badge w3-sand'>{superficie}</div>
    </div>
  )
}
export default App