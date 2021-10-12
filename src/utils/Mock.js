import aros from '../images/aros.jpg'
import anillo from '../images/anillo.jpg'
import cadenas from '../images/cadenas.jpg'
import pulceras from '../images/pulceras.jpg'
import arosOro from '../images/arosOro.jpg'
import anillosOro from '../images/anillosOro.jpg'
import cadenasOro from '../images/collaresOro.jpg'
import pulcerasOro from '../images/pulcerasOro.jpg'

const joyas = [
    {id:1, categoria:"plata", nombre:"Aros", picture: aros  },
    {id:2, categoria:"plata", nombre: "Anillos", picture: anillo },
    {id:3, categoria:"plata", nombre: "Cadenas", picture: cadenas },
    {id:4, categoria:"plata", nombre: "Pulceras" ,picture: pulceras}, 
    {id:5, categoria:"oro", nombre:"Aros", picture: arosOro  },
    {id:6, categoria:"oro", nombre: "Anillos", picture: anillosOro },
    {id:7, categoria:"oro", nombre: "Cadenas", picture: cadenasOro },
    {id:8, categoria:"oro", nombre: "Pulceras" ,picture: pulcerasOro}, 
]

export const getFetch = new Promise((res, rej) => {

    let respuesta = '200'
    if(respuesta === '200'){

    setTimeout(() =>{

        res(joyas)
    }, 2000)
}else{
    rej('404')
}

});


//const Unajoya = {id:2, nombre: "Anillos", picture: anillo, caracteristica:"plata 925"}
const joya2 = joyas.filter((joya)=>joya.id===2)

export const getFetchUno = new Promise((res, rej) => {
    let respuesta = '200'
    if (respuesta === '200') {
        setTimeout(() => {
            res(joya2)
        }, 3000)
    } else {
        rej('404')
    }
})