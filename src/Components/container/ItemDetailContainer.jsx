import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getFirestore } from '../../services/getFirebase'
import ItemDetail from '../ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
  

    useEffect(() => {
        
            const dbQuery = getFirestore()
            dbQuery.collection('joyas').doc(id).get()
            .then ((resp => setItem({ id:resp.id , ...resp.data()})))
            .catch (err => console.log(err))
            .finally()
        
         
   },[id])
    return (
        <>
         {
         item && <ItemDetail className='detail' item = {item[0]} />
         }
        </>
    )
}

export default ItemDetailContainer


//funcionaba 10 puntos
// getFetch
         //   .then((res) => {
         //     if(id){
            // const itemFiltrado = res.filter((item)=> item.id === parseInt(id))
            //  setItem(itemFiltrado)
            // }else {
           //      setItem(res)
         //}
        // })
        // .catch((err)=> console.error(err))