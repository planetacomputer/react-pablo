import './App.css'
import { useRef } from 'react'
const App = () => {
  const eurosRef = useRef();
  const dolaresRef = useRef();

  const convertirEuroDolar = () => {
    dolaresRef.current.innerHTML = eurosRef.current.value*2;
  }
  return (
    <div className='w3-container w3-khaki'>
    <input type="text" ref={eurosRef} />
    <button onClick={convertirEuroDolar}>Convertir</button>
    <div className='w3-badge w3-sand' ref={dolaresRef}></div>
    </div>
  )
}
export default App
