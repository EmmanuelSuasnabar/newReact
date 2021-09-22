import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './Components/NavBar';
import ItemListContainer from './Components/container/ItemListContainer';
import ItemDetailContainer from './Components/container/ItemDetailContainer';




function App() {
  return (
  <>
      <NavBar />
      <ItemListContainer saludo={'Bienvenido a la tienda'} />
      <ItemDetailContainer /> 
  </>   
  );
}

export default App;
