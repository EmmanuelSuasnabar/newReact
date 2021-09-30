import {useState, createContext, useContext} from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState ([])

    //function addToCart(item) {
      //  setCartList([...cartList, item])
    //}
    const addToCart = (data) => {
        let previousCart = [...cartList]
        if (previousCart.some(i => i.item.id === data.item.id)) {
            previousCart.find(i => i.item.id === data.item.id).cantidad += data.cantidad
            setCartList(previousCart)
        } else {
            setCartList([...cartList, data])

        }
    }

    function borrarLista() {
        cartList([])
    }

    console.log(cartList)
    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            borrarLista
        }}>
            {children}
        </cartContext.Provider>

    )
}