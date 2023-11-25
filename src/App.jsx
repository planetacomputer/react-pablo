import './App.css'
import { useState } from 'react'
const App = () => {
  const [contador, setContador] = useState(0);
  const contar = () => {
    setContador(contador + 1)
  }
  
  return (
    <div className='w3-container w3-khaki'>
      <button className="w3-button w3-teal" onClick={contar}>Contar</button>
      <div className='w3-container w3-badge w3-sand'>{contador}</div>
    </div>
  )
}
export default App
