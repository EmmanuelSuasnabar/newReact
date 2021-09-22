import {useState, useEffect} from 'react'
import {getFetchUno} from '../../utils/Mock' 
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    useEffect(() => {
        getFetchUno
        .then(respuesta => setItem(respuesta))

    },)
    return (
        <div className='detail'>
            <ItemDetail item = {item} />
        </div>
    )
}

export default ItemDetailContainer
