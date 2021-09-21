import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';




function App() {
  return (
  <>
      <NavBar />
      <ItemListContainer saludo={'Bienvenido a la tienda'} />
  </>   
  );
}

export default App;
