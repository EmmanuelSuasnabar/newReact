import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './Components/NavBar';
import ItemListContainer from './Components/container/ItemListContainer';
import ItemDetailContainer from './Components/container/ItemDetailContainer';
import Cart from './Components/cart/Cart'
import CartContextProvider from './context/cartContext'



function App() {
  return (
  <CartContextProvider>  
   
    <BrowserRouter> 
    <>
      <NavBar />
      <Switch>
      <Route path='/' exact>
      <ItemListContainer saludo={'Bienvenido a la tienda'} />
      </Route>

      <Route exact path='/categoria/:idCategoria' component={ItemListContainer} />

      <Route exact path= '/detalle/:id'component={ItemDetailContainer} /> 
      
      <Route exact path= '/cart'component={Cart} />
      </Switch>
    </>
    </BrowserRouter> 

  </CartContextProvider> 
   
  );
}

export default App;
