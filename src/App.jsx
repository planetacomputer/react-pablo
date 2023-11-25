import { useState } from 'react'
const App = () => {
  const element = <div>Hello World</div>
  function multiplicar (a, b) {
    return a * b
  }
  const JSX = (
    <div className='nombre'>
      <h1>Add a class to this div</h1>
      {/* comentarios */}
    </div>
  )
  const producto = multiplicar(2, 3)
  const numeros = [1, 2, 3, 4, 5]
  return (
    <>
    <div>{element} {JSX} {producto}</div>
    <div><button onClick={() => alert('Pulsado')}>Click me</button></div>
    <div>
      <ul>
        {numeros.map((n, key) => <li key={key}>{n}</li>)}
      </ul>
    </div>
    </>
  )
}
export default App
