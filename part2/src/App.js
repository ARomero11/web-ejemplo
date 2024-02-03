import './App.css';
import Mensaje from './Mensaje';


const App = ()  =>{
  return (
    <div className="App">
     <Mensaje color='red' title='Estamos de parranda'/>
     <Mensaje color='blue' title='Estamos de fiesta'/>
     <Mensaje color='yellow' title='Estamos de ps4' />
    </div>
  )
}

export default App;
