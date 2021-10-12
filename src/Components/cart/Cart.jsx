import { useCartContext } from '../../context/cartContext' 

const Cart = () => {

    const {cartList, borrarLista} = useCartContext()
    console.log(cartList)

    return (
        <>
            {cartList.map(item => <div key={item.id}>
            <img style={{width:'150px', height:'100px'}} src={item.item.picture} alt='picture'/>
                                     <label> Nombre: {item.item.nombre}</label>
                                     <label> Categoria: {item.item.categoria}</label>
                                     <label> Cantidad: {item.cantidad}</label>
                                     <button className='btn btn-danger' onClick={()=>borrarLista(item)}>x</button>
                                     <hr />
                                  </div>)}
            
        </>
    )
}

export default Cart
