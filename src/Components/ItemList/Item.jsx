

const Item = ({joya}) => {
    return (
    
          <>
        <div className='card w-50 mt-3'>
    
        </div>

          <div className='card-header'>{joya.nombre}</div>
          <div className='card-body'>
              <img className="img-fluid" src={joya.picture} alt='picture' />
              
          </div>
          
           <div className="card-footer" >
              <button className="btn btn-outline-primary btn-block" > Detalles </button>
          </div> 

          </>
    
    )
}

export default Item
