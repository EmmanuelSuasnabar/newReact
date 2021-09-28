import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getFetch } from '../../utils/Mock'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = (props) => {

    const [joyas, setJoyas] = useState([])
    const [loading,setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(()=>{

        if(idCategoria){
            getFetch.then(respuesta =>{
                setJoyas(respuesta.filter(prod => prod.categoria===idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }else{
            getFetch.then(respuesta =>{
                setJoyas(respuesta)
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }
       

    },[idCategoria])
    console.log(idCategoria)   
    return (
        <div className='Contador'>
            <h1>{props.saludo}</h1>
            { loading ? <h2>Cargando...</h2> : <ItemList joyas={joyas} />}
            
        </div>
    )
}

export default ItemListContainer
