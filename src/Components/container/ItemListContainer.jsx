import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getFirestore } from '../../services/getFirebase'

import ItemList from '../ItemList/ItemList'




const ItemListContainer = (props) => {

    const [joyas, setJoyas] = useState([])
    const [loading,setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(()=>{

        if (idCategoria) {

             const dbQuery = getFirestore()
             dbQuery.collection('joyas').where('categoria','==',idCategoria).get()
             .then (respuesta => {
                 setJoyas(respuesta.docs.map(joya => ({id: joya.id, ...joya.data()})))
             })
             .catch (error => console.log(error))
             .finally (()=> setLoading(false))
            
        } else {

            const dbQuery = getFirestore()
            dbQuery.collection('joyas').get()
            .then (respuesta => {
                setJoyas(respuesta.docs.map(joya => ({id: joya.id, ...joya.data()})))
            })
            .catch (error => console.log(error))
            .finally (()=> setLoading(false))
            
        }






        // if(idCategoria){
        //     getFetch.then(respuesta =>{
        //         setJoyas(respuesta.filter(prod => prod.categoria===idCategoria))
        //     })
        //     .catch(error => console.log(error))
        //     .finally(()=> setLoading(false))

        // }else{
        //     getFetch.then(respuesta =>{
        //         setJoyas(respuesta)
        //     })
        //     .catch(error => console.log(error))
        //     .finally(()=> setLoading(false))

       // }
       

    },[idCategoria])
       
    console.log(joyas)
     return (
         <div className='Contador'>
             <h1>{props.saludo}</h1>
             { loading ? <h2>Cargando...</h2> : <ItemList joyas={joyas} />}
            
         </div>
     )
}

export default ItemListContainer
