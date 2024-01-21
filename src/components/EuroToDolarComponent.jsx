import { useRef } from 'react'
import { useState } from 'react';

const EuroToDolarComponent = () => {
  const [dolares, setDolares] = useState(0);

  return (
    <div className='w3-container w3-khaki'>
      <input type="text" onChange={e=>setDolares(e.target.value*2)} />
      <div className='w3-badge w3-sand'>{dolares}</div>
    </div>
  )
}

export default EuroToDolarComponent;