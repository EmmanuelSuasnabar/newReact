import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getFetch} from '../../utils/Mock' 
import ItemDetail from '../ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
    useEffect(() => {
        getFetch
        .then((res) => {
            if(id){
                
            const itemFiltrado = res.filter((item)=> item.id === parseInt(id))
            setItem(itemFiltrado)
        }else {
            setItem(res)
        }
   })
   .catch((err)=> console.error(err))
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
