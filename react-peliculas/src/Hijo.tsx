import { useContext } from 'react'
import ValorContext from './ValorContext'

export default function Hijo(){

    //aca obtengo el valor del contexto a mostrar  ValorContext conseguido por el import
    const valor = useContext(ValorContext)

    return(
        <>
        <h3>Componente hijo el valor de contexto es: {valor} </h3>
        <h2>Hago una prueba para ver que todo ande bien </h2>
        </>
        
    )
}