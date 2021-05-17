import { Link } from "react-router-dom";

//se crea para anclar lo que se va a visualizar al presionar generos
export default function IndiceActores(){
    return(
        <>
        <h3>Indice Actores </h3>
        <Link to="actores/crear">Crear Actor </Link>
        </>
    )

}