import './App.css'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const gradosRef = useRef();
  const [fahrenheit, setFahrenheit] = useState(0);

  const convertirGradosFahrenheit = () => {
    setFahrenheit((gradosRef.current.value*9/5)+32);
  }
  return (
    <div className='w3-container w3-khaki'>
    <input type="text" ref={gradosRef} />
    <button onClick={convertirGradosFahrenheit}>Convertir</button>
    <div className='w3-badge w3-sand'>{fahrenheit}</div>
    </div>
  )
}
export default App