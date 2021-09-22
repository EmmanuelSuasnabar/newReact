

const ItemDetail = ({item}) => {
    return (
        <>
            <>
        <div key={item.id} className='card w-50 mt-3'>
        </div>
       

          <div className='card-header'>Nuevo anillo {item.caracteristica}</div>
          <div className='card-body'>
              <img className="img-fluid" src={item.picture} alt='picture' />
              
          </div>
          
           <div className="card-footer" >
              <button className="btn btn-outline-primary btn-block" > Detalles </button>
          </div> 
        </>
        
        </>
    )
}

export default ItemDetail
