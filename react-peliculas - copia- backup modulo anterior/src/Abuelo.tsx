import React from "react";
import Padre from "./Padre";
// creo la variable abuelo para ver como atraves de padre puedo acceder al contexto saltando entre componentes 
export default function Abuelo(){

    return(

        <Padre></Padre>
    )
}