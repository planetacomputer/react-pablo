import { useState } from 'react';
import ComponenteMultiple from './components/ComponenteMultiple';
import './App.css';

const App = () => {
  const [datos1, setDatos1] = useState(0);
  const [datos2, setDatos2] = useState(0);
  return (
    <div>
        <input type="number" onChange={(e) => setDatos1(e.target.value)} />
        <input type="number" onChange={(e) => setDatos2(e.target.value)} />
        <ComponenteMultiple opcion={1} dato1={datos1} />
        <ComponenteMultiple opcion={2} dato1={datos1} />
        <ComponenteMultiple opcion={3} dato1={datos1} dato2={datos2} />
    </div>
  )
}
export default App