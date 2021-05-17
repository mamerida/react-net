import { Link } from "react-router-dom";

//se crea para anclar lo que se va a visualizar al presionar generos
export default function IndiceCines(){
    return(
        <>
        <h3>Indice Cines </h3>
        <Link to="cines/crear">Crear Cine </Link>
        </>
    )

}