import { ReactElement } from "react";

export default function ProyectarContenidos(props: proyectarContenidoProps){
    return(
        <>
            <h3>Parte superior</h3>

                {props.children}
            <h2> Parte inferior</h2>
        
        </>


    )

}

interface proyectarContenidoProps{
    //propiedad especial que permite enviar entre etiquedas de componentes 
    children : ReactElement

}