
import { Link } from "react-router-dom";

//se crea para anclar lo que se va a visualizar al presionar generos
export default function IndiceGeneros(){
    return(
        <>
        <h3>Indice generos </h3>
        <Link to="generos/crear">Crear Genero </Link>
        </>
    )
}