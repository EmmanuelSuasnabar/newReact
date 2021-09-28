import {useState} from 'react'
import {Link} from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true) 
    function Sumar(){
        if(count<stock){  
        setCount(count + 1)
        
     }
    }
    function Restar(){
        if(count>1) { 
        setCount(count - 1)

     }
    }
    const agregarCarrito = ()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <div>
            <h3>Soy itemCount</h3>
            <button onClick={Sumar}>+</button>
            <label>{count}</label>
            <button onClick={Restar}>-</button>
            {cambiarBoton ? 
                <button onClick={agregarCarrito}>Agregar al carrito</button>
                :
                <div>
                <Link to={'/cart'}>
                <button>Finalizar Compra</button>
                </Link>
                <Link to={'/'}>
                <button>Seguir Comprando</button>
                </Link>
                </div>  
            }
            
        </div>
    )
}

export default ItemCount