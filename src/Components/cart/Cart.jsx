import { useCartContext } from '../../context/cartContext' 

const Cart = () => {

    const {cartList} = useCartContext()
    console.log(cartList)

    return (
        <>
            {cartList.map(item => <h2>{item.item.nombre}</h2>)}
            {cartList.map(item => <h2>{item.item.id}</h2>)}
            {cartList.map(item => <h2>{item.item.categoria}</h2>)}
            
        </>
    )
}

export default Cart
