import './App.css';
import Icon from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
function App() {
  const otrotitulo = 'soy el contador'
  return (
    <div className="App">
      <Navbar>
        <Icon/>
      </Navbar>
      <ItemListContainer greeting= 'Bienvenidos!!' lorem='Hola bienvenidos a mi pagina, esto es una prueba de texto... 1 . 2 . 3' otrotitulo={otrotitulo}/>
    </div>
  );
}

export default App;
