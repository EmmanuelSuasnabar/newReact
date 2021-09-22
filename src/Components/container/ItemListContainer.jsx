import {useState, useEffect} from 'react'
import { getFetch } from '../../utils/Mock'
import ItemCount from "../ItemCount"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) => {

    const [joyas, setJoyas] = useState([])
    const [loading,setLoading] = useState(true)

    const onAdd = (cant) =>{
        console.log(cant)
    }

    useEffect(()=>{
        getFetch.then(respuesta =>{
            setJoyas(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    },[])

    return (
        <div className='Contador'>
            <h1>{props.saludo}</h1>
            { loading ? <h2>Cargando...</h2> : <ItemList joyas={joyas} />}
            <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
