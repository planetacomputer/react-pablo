import './App.css'
import HelloComponent from './components/HelloComponent'
import BoxComponent from './components/BoxComponent'
import MiComponente from './components/MiComponente'
import { useState } from 'react'


const App = () => {
  const [contador, setContador] = useState(0)
  const changePadre = (param) => {
    setContador(contador + param)
  }
  return (
    <>
      <MiComponente onSomeEvent={changePadre} />
      <HelloComponent title="Hola componente" />
      <BoxComponent>Prop en contenido etiqueta</BoxComponent>
      <div className='w3-container w3-aqua'>{contador}</div>
    </>
  )
}
export default App