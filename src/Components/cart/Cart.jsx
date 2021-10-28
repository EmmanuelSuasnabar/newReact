import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext' 
import { getFirestore } from '../../services/getFirebase'
import firebase from 'firebase'
import 'firebase/firestore'

const Cart = () => {
    const [formData, setFormData] = useState({
        name:'',
        tel:'',
        email:''
    })

    const {cartList, borrarLista, precioTotal} = useCartContext()
    console.log(cartList)
    
    const handleOnsubmit =(e)=> {
        e.preventDefault()
        
        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        
        orden.buyer = formData
        
        orden.total = precioTotal()
        
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.title
            const price = cartItem.item.price * cartItem.quantity
            
            return{id, title, price}
        }
        )
        const db = getFirestore();
        db.collection('orders').set(orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> 
        setFormData({name:'',
        tel:'',
        email:''}),
        borrarLista()
        )

        const itemsToUpdate = db.collection('joyas').where(
            firebase.firestore.FieldPath.documentId(), 'in',cartList.map(i=> i.item.id)
        )

        const batch = db.batch()

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })
            batch.commit().then(res =>{
                console.log('resultado batch', res)
            })
        })
    
    }
    

    function handleOnChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }

    return (
        <div>

        {cartList.length === 0 ?
        <div>
            <h2>No hay productos en su carrito</h2>
            <Link to='/' className="btn btn-outline-primary">Seguir Comprando</Link>
        </div>
        :
        <div>

            {cartList.map(item => <div key={item.id}>
            <img style={{width:'150px', height:'100px'}} src={item.item.picture} alt='picture'/>
                                     <label> Nombre: {item.item.nombre}</label>
                                     <label> Categoria: {item.item.categoria}</label>
                                     <label> Cantidad: {item.cantidad}</label>
                                     <button className='btn btn-danger' onClick={()=>borrarLista(item)}>x</button>
                                     <hr />
                                  </div>)}
            
        
        
    
    

       <form 
            onSubmit={handleOnsubmit}
            onChange={handleOnChange}>

       <input
           type='text'
           placeholder='ingrese el nombre'
           name='name'
           formData={formData.name}
       />
       <input
           type='text'
           placeholder='ingrese el nro de tel' 
           name='tel'
           formData={formData.tel}
       />
       <input 
           type='text'
           placeholder='ingrese el email'
           name='email'
           formData={formData.email}
       />
       <button>Terminar Compra</button>
       </form>
      </div>
      }
      </div>
           )}
export default Cart
