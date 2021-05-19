import { ReactElement } from "react";

export default function Button (props : ButtonProps ){

    return(

        <button type={props.type}
         className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
        >{props.children} </button>

    )

}

interface ButtonProps{
    children:React.ReactNode,
    // defino un onCLick para poder darle funcionalidad a los botones
    onClick?():void
    type: "button"|"submit",
    disabled:boolean
    className:string
}
// le digo que el tipo de dato por defecto sea boton y pongo opcional el onclick

Button.defaultProps = {
    type:"button",
    disabled:false,
    className: "btn btn-primary"
}