import { ReactElement } from "react";

export default function Button (props : ButtonProps ){

    return(

        <button type="button"
         className="btn btn-primary"
        onClick={props.onClick}
        >{props.children} </button>

    )

}

interface ButtonProps{
    children:React.ReactNode,
    // defino un onCLick para poder darle funcionalidad a los botones
    onClick():void
}