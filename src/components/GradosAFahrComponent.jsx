import { useState } from 'react'
const GradosAFahrComponent = () => {
  const [fahrenheit, setFahrenheit] = useState(0)

  return (
    <div className='w3-container w3-khaki'>
      <input type="text" onChange={e => setFahrenheit((e.target.value*9/5)+32)} />
      <div className='w3-badge w3-sand'>{fahrenheit}</div>
    </div>
  )
}
export default GradosAFahrComponent