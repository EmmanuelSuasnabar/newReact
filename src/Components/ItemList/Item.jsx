import { Link } from 'react-router-dom'

const Item = ({joya}) => {
    return (
    
       <>
        <div key={joya.id} className='card w-50 mt-3'>
        </div>
       

          <div className='card-header'>{joya.nombre}</div>
          <div className='card-body'>
              <img className="img-fluid" src={joya.picture} alt='picture' />
              
          </div>
          
           <div className="card-footer" >
              <Link to={`/detalle/${joya.id}`}>
              <button className="btn btn-outline-primary btn-block" > Detalles </button>
              </Link>  
          </div> 
        </>
          
    
    )
}

export default Item
