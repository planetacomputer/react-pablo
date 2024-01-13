import './App.css'
import { useState } from 'react'

const App = () => {
  const [image, setImage] = useState(0);
  const ANIMAL_IMAGES = [
    'http://via.placeholder.com/100x100',
    'http://via.placeholder.com/200x200',
    'http://via.placeholder.com/300x300'
  ]
  const placeImage = (number) => {
    setImage(number);
  }
  return (
    <div className='w3-container w3-khaki'>
    <button onClick={()=>{placeImage(0)}}>Image 1</button>
    <button onClick={()=>{placeImage(1)}}>Image 2</button>
    <button onClick={()=>{placeImage(2)}}>Image 3</button>
    <img src={ANIMAL_IMAGES[image]} alt='Animal' />
    <div>{image+1}</div>
    </div>
  )
}
export default App