import { ReactElement } from "react";

export default function Button (props : ButtonProps ){

    return(

        <button type={props.type}
         className="btn btn-primary"
        onClick={props.onClick}
        >{props.children} </button>

    )

}

interface ButtonProps{
    children:React.ReactNode,
    // defino un onCLick para poder darle funcionalidad a los botones
    onClick?():void
    type: "button"|"submit"
}
// le digo que el tipo de dato por defecto sea boton y pongo opcional el onclick

Button.defaultProps = {
    type:"button"
}