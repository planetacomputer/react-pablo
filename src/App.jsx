import data from './assets/data.json';
import './App.css';

const App = () => {
  return (
    <div className='w3-container'>
      <ul className="w3-ul w3-border">
        {data.filter(d => d.edad < 40).map((item, index) => {
            return (
                <li style={{color: 'w3-red'}} key={index}>
                    {item.name} - {item.email} - {item.edad}
                </li>
            )
        })}
        </ul>
    </div>
  )
}
export default App