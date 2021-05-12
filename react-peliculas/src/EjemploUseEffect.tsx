// import { setInterval } from "node:timers"
import { useEffect, useState } from "react"

export default function EjemploUseEffect(){
    //a use efect le pasamos una funcion que es lo que va a ejecutar
    const [fecha, setFecha] = useState(new Date())
    //useState y useEffect se ejecuta cada que se vuelve a renderizar el componente 
    //para evitar esto osea que todos los useeffect se acutalizen con el setInterval
    //se usa lo siguiente 
    const [clicks,setClick] = useState(0)
    useEffect(() => {
        // lo que va a hacer el use effect
        console.log("el componente ha cargado de manera correcta 2")
        document.title = `${clicks}  veces `
        return() =>{
            //se ejecuta al destruir al componente esto se puede hacer por ejemplo con un checkbox 
            console.log("el componente se va a destruir ")
        }
    },[clicks]) // al colocarle , y una variable indico que el use effect cambia unicamente si clicks se modifica 

    useEffect (()=>{
        const intervalId = setInterval(()=>{
            setFecha(new Date())

        },1000)
        return() => {clearInterval(intervalId)}

    })

    //useEffect que se ejecuta una sola vez lo logro dandole como componente una dependencia vacia 
    // osea como segundo parametro []
    useEffect(()=>{

        console.log(" me ejecuto una sola vez ")

    },[])

    return(
        <>
        <button onClick ={()=>{setClick(clicks + 1 )}}>Me has clickeado {clicks} veces </button>
        
        <div>
            {fecha.toString()}
        </div>
        </>
 
    
    )
    
}