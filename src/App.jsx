import './App.css'
import HelloComponent from './components/HelloComponent'
import BoxComponent from './components/BoxComponent'

const App = () => {
  return (
    <>
      <HelloComponent title="Hola componente" />
      <BoxComponent>Prop en contenido etiqueta</BoxComponent>
    </>
  )
}
export default App