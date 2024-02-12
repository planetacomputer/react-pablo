import PostComponent from './components/PostComponent';
import GradToFahrComponente from './components/GradToFahrComponente';
import AreaRectanguloComponente from './components/AreaRectanguloComponente';
import EuroToDollarComponente from './components/EuroToDollarComponente';
import './App.css';
//Se realizan los cálculos en MiComponente (hijo) y se envían a App (padre) por props
const App = () => {
  return (
    <>
        <ul class="w3-ul w3-border">
          <li><PostComponent postTitle="Viaje a la luna" author="Julio Verne">Texto 1</PostComponent></li>
          <li><PostComponent postTitle="Viaje a Marte" author="Pablo Mon">Texto 2</PostComponent></li>
        </ul>
        <EuroToDollarComponente />
        <GradToFahrComponente />
        <AreaRectanguloComponente />
    </>
  )
}
export default App