import {useState} from 'react'
import ItemCount from '../Components/ItemCount'


const ItemDetail = ({item}) => {

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const onAdd = (cant) =>{
        console.log(cant)
        setCantidadSeleccionada(cant)
    }
    return (
        <>
       
            
        <div key={item.id} className='card w-50 mt-3'>
        </div>
       

          <div className='card-header'> Detalle {item.caracteristica}</div>
          <div className='card-body'>
              <img className="img-fluid" src={item.picture} alt='picture' />
              
          </div>
         
           <div className="card-footer" >
              <button className="btn btn-outline-primary btn-block" > Detalles </button>
          </div> 
          <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        

        
       
        </>
    )
}

export default ItemDetail
