import './App.css'
import { useRef, useState } from 'react'
import MyComponent from './components/MyComponent';

const App = () => {
  const anchoRef = useRef();
  const altoRef = useRef();
  const [superficie, setSuperficie] = useState(0);

  const calcularSuperficie = () => {
    setSuperficie(anchoRef.current.value * altoRef.current.value);
  }
  
  return (
    <div className='w3-container w3-khaki'>
      <MyComponent />
      <input type="text" onChange={e => calcularSuperficie(e.target.value)} ref={anchoRef} />
      <input type="text" onChange={e => calcularSuperficie(e.target.value)} ref={altoRef} />
      <div className='w3-badge w3-sand'>{superficie}</div>
    </div>
  )
}
export default App