import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadorGenerico(props: ListadoGenericoProps){
    if(!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI
        }
        return <Cargando/>
    }else if(props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI
        }
        return(<>No hay peliculas para mostrar</>)
    }else{
        return(props.children)
    }

}

interface ListadoGenericoProps{
    //tengo que utilizar el nombre listado por que lo declare aca 
    listado:any;
    //children elemento que paso como parametro a la funcion se llama children
    children:ReactElement;
    cargandoUI?:ReactElement;
    listadoVacioUI?:ReactElement;

}