import { ReactElement } from "react";

export default function ProyectarContenido2(props: ProyectarContenidos2Props){
    return(
        <>
            {props.parteSuperior ? props.parteSuperior :  <h3>Contenido por defecto</h3> }
            <hr/>
            {props.parteIntermedia}
            <hr/>
            {props.parteInferior}
        </>

    )
}

//props.parteSuperior ? props.parteSuperior :  <h3>Contenido por defecto</h3>
// ? significa que si el contenido es true entonces muestro la variable
// : lo que pasa si el valor es false o nulo
//cuando yo uso esto indico que si no obtiene un parametro muestra lo que esta al lado de los dos puntos

interface ProyectarContenidos2Props{
    //propiedades opcionales se le coloca un ? al final del nombre
    parteSuperior? :ReactElement;
    parteIntermedia: ReactElement;
    parteInferior :ReactElement;
}