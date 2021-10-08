import {useState, createContext, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState ([])

    //function addToCart(item) {
      //  setCartList([...cartList, item])
    //}
    const addToCart = (data) => {
        let carritoPrevio = [...cartList]
        if (carritoPrevio.some(i => i.item.id === data.item.id)) {
            carritoPrevio.find(i => i.item.id === data.item.id).cantidad += data.cantidad
            setCartList(carritoPrevio)
        } else {
            setCartList([...cartList, data])

        }
    }

    const borrarLista = (item) => {
        const productoBorrado = cartList.filter((prod) => prod.item.id !== prod.item.id)
        setCartList([...productoBorrado])
    }

    const iconoCarrito = () => {
        return cartList.reduce((acum,item)=> acum + item.cantidad, 0)
    }

    const precioTotal =()=>{
        return cartList.reduce((acum,item)=>(acum + (item.cantidad * item.item.price)), 0)
    }

    console.log(cartList)
    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            iconoCarrito,
            precioTotal,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>

    )
}