import './App.css';
import { useState } from 'react';
import Icon from './components/CartWidget';
/* import ContadorContainer from './components/ContadorContainer';
import ItemConter from './components/ItemConter';
import ItemListContainer from './components/ItemListContainer'; */
import Navbar from './components/Navbar';
function App() {
  const [cont, setCont] = useState(0);
  const [date, setDate] = useState(new Date().toString());

  function update() {
    setCont(cont + 1);
    setDate(new Date().toString());
  }

  return (
    <div className="App">

      <Navbar>
        <Icon />
      </Navbar>

      <div className='count'>
        <h1>Hola, este es mi primer contador</h1>
        <p>Contador: {cont}</p>
        <p>Date: {date}</p>
        <button className='butonCount' onClick={update}>Click</button>
      </div>
    </div>
  );
}

export default App;


{/* <ItemListContainer greeting= 'Bienvenidos!!' lorem='Hola bienvenidos a mi pagina'/>
      <ItemConter titulo={'Hola gente como va?'}/>
      <ContadorContainer></ContadorContainer> */}