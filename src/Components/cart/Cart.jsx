import { useCartContext } from '../../context/cartContext' 

const Cart = () => {

    const {cartList, borrarLista} = useCartContext()
    console.log(cartList)

    return (
        <>
            {cartList.map(item => <div key={item.id}>
                                     <h2>{item.item.nombre}</h2>
                                     <h3>{item.item.id}</h3>
                                     <h4>{item.item.categoria}</h4>
                                     <button onClick={()=>borrarLista(item)}>x</button>
                                  </div>)}
            
        </>
    )
}

export default Cart
