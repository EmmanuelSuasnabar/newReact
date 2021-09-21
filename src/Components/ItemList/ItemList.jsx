import Item from './Item'

const ItemList = ({joyas}) => {
    return (
        
        <>
        
        {joyas.map(joya => <Item joya = {joya} /> 
        
        )}
         
        </>
    
        
    )
}

export default ItemList
