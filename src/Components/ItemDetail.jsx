
import ItemCount from '../Components/ItemCount'
import { useCartContext } from '../context/cartContext'

const ItemDetail = ({item}) => {

//const [{/*cantidadSeleccionada*/}, setCantidadSeleccionada] = useState(0)

    
    const {addToCart} = useCartContext()
    
    const onAdd = (cant) =>{
       // console.log(cant)
        //setCantidadSeleccionada(cant)
        addToCart({item: item,cantidad:cant})
    }
    
    return (
        <>
       
            
        <div key={item.id} className='card w-50 mt-3'>
        </div>
       

          <div className='card-header'> Detalle {item.descripcion}</div>
          <div className='card-body'>
              <img className="img-fluid" src={item.picture} alt='picture' />
              
          </div>
         
           <div className="card-footer" >
              <button className="btn btn-outline-primary btn-block" > Comprar </button>
          </div> 
         
          <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        

        
       
        </>
    )
}

export default ItemDetail
