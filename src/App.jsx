import { useState } from 'react';
import ComponenteMultiple from './components/ComponenteMultiple';
import './App.css';

const App = () => {
  const [dias, setDias] = useState(0);
  return (
    <div>
        <input type="number" onChange={(e) => setDias(e.target.value)} />
        <ComponenteMultiple opcion={1} dias={dias} />
        <ComponenteMultiple opcion={2} dias={dias} />
    </div>
  )
}
export default App