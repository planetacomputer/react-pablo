import PostComponent from './components/PostComponent';
import MiComponente from './components/MiComponente';
import './App.css';
import { useState } from "react";
//Se realizan los cálculos en MiComponente (hijo) y se envían a App (padre) por props
const App = () => {
  const [grados, setGrados] = useState(0);
  const convertirGrados = param => {
    setGrados((param*9/5)+32);
  }
  return (
    <>
        <ul class="w3-ul w3-border">
          <li><PostComponent postTitle="Viaje a la luna" author="Julio Verne">Texto 1</PostComponent></li>
          <li><PostComponent postTitle="Viaje a Marte" author="Pablo Mon">Texto 2</PostComponent></li>
        </ul>
        <MiComponente onSomeEvent={convertirGrados}></MiComponente>{grados}
    </>
  )
}
export default App