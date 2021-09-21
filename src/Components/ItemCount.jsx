import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

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
    }

    return (
        <div>
            <h3>Soy itemCount</h3>
            <label>{count}</label><br/>
            <button onClick={Sumar}>+</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <button onClick={Restar}>-</button>
        </div>
    )
}

export default ItemCount