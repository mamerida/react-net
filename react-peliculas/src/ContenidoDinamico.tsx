export default function ContenidoDinamico(props:any){

    //ejemplo 1 con ternario 
    // return(
    //     <>
    //     {/* utilizar el operador ternario para mostar contenido dinamico  */}
    //     <div>{props.mostrarMensajeSecreto ? <span>Mensaje secreto : 42 </span> : null}</div>
    //     </>

    // )


    //ejemplo 2 con if 
    if(props.calificacion >90){
        return(
            <div>
                <h3>{props.nombre} : Excelente calificacion</h3>
            </div>
        )
    }else if(props.calificacion >= 80 && props.calificacion <=90){
        return(
            <div><h3>{props.nombre} :Muy bien hecho</h3></div>
        )
    }else{
        return(
            <div><h3>{props.nombre} :LOL</h3></div>
        )
    }

}