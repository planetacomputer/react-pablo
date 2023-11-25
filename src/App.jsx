import { useRef } from 'react'
const App = () => {
  const nombreRef = useRef();
  const resultadoRef = useRef();

  const procesar = () => {
    resultadoRef.current.innerHTML = nombreRef.current.value;
  }
  return (
    <>
    <input type="text" ref={nombreRef} />
    <button onClick={procesar}>Procesar</button>
    <div ref={resultadoRef}></div>
    </>
  )
}
export default App
