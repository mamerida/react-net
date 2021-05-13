

// esto lo hago para invocar desde un componente funciones exportadas directamente desde el main
export default function FormularioTexto(props :FormularioTextoProps){
    return(
        <input type="text"
        // de esta forma todo un componente del padre en el hijo con "props"
        onKeyUp ={(e) => props.ManejarKeyUp(e.currentTarget.value)}
        />


    )


}

interface FormularioTextoProps{
    // nombre de la funcion que va a usar (parametros de entrada) : salida
    ManejarKeyUp(texto:string):void

}