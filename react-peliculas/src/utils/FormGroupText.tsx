import {Field, ErrorMessage} from "formik";
import React from "react";
import MostrarErrorCampo from '../utils/MostrarErrorCampo'
export default function FormGroupText (props : formGroupTextProps){

    return(
        <>
        <div className="form-group">
            {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
            {/* field permite sincornizar el valor en el lavel con el initial value de formik */}
            <Field name={props.campo} className="form-control"
            placeholder ={props.placeholder}/>
            {/* al validar tengo que colocar el campo nombre debo validar como se va a mostrar el error */}
            {/* indico el nombre ( name) y lo que va a mostrar si sale el error */}
            {/* fucion anonima con mensjae y lo que voy a mostrar  */}
            <ErrorMessage name={props.campo} >{ mensaje =><MostrarErrorCampo mensaje={mensaje}/>}</ErrorMessage>
        </div>
        </>
    )
}

interface formGroupTextProps{
    campo:string;
    label?:string;
    placeholder?:string;
}