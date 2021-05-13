import { useContext } from 'react'
import ValorContext from './ValorContext'
import Hijo from './Hijo';

export default function Padre(){

    //aca obtengo el valor del contexto a mostrar  ValorContext conseguido por el import
    const valor = useContext(ValorContext)

    return(
        <>
        <h3>Componente padre el valor de contexto es: {valor} </h3>
        <Hijo></Hijo>
        </>
        
    )
}