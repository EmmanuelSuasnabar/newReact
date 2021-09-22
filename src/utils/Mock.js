import aros from '../images/aros.jpg'
import anillo from '../images/anillo.jpg'
import cadenas from '../images/cadenas.jpg'
import pulceras from '../images/pulceras.jpg'



const joyas = [
    {id:1, nombre:"Aros", picture: aros  },
    {id:2, nombre: "Anillos", picture: anillo },
    {id:3, nombre: "Cadenas", picture: cadenas },
    {id:4, nombre: "Pulceras" ,picture: pulceras},
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


const Unajoya = {id:2, nombre: "Anillos", picture: anillo, caracteristica:"plata 925"}


export const getFetchUno = new Promise((res, rej) => {
    let respuesta = '200'
    if (respuesta === '200') {
        setTimeout(() => {
            res(Unajoya)
        }, 3000)
    } else {
        rej('404')
    }
})