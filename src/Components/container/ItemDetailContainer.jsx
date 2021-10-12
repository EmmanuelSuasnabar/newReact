import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase'

import ItemDetail from '../ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
  

    useEffect(() => {
        if (id) {
            
            const dbQuery = getFirestore()
            dbQuery.collection('joyas').doc(id).get()
            .then (res => {
                console.log(res)
                setItem({id:res.id, ...res.data()})
            })
            .catch (err => console.log(err))
            .finally()
        } else {
            const dbQuery = getFirestore()
            dbQuery.collection('joyas').get()
            .then(res=>{
                setItem(res.docs.map(joya =>({id:joya.id,...joya.data()})))
            })
            .catch (err => console.log(err))
            .finally()
            
        }
        



        //  getFetch
        //  .then((res) => {
        //      if(id){

        //      const itemFiltrado = res.filter((item)=> item.id === parseInt(id))
        //      setItem(itemFiltrado)
        //     }else {
        //         setItem(res)
        //     }
        // })
        // .catch((err)=> console.error(err))
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
