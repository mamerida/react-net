import {useFormikContext} from 'formik';
import MostrarErrorCampo from './MostrarErrorCampo'

export default function FormGroupFecha(props:FormGroupFechaProps){
    //se crea la constante valores para tomar valores de otros elementos de tipo formik
    const {values, validateForm,touched,errors} = useFormikContext<any>();
    return(
    <div className="from-group">
        <label htmlFor={props.campo}> {props.label}</label>
        <input type="date" className="form-control"
            id={props.campo}
            name={props.campo}
            // se le pasa el valor actual de la fecha 
            defaultValue={values[props.campo]?.toLocaleDateString("en-CA")}
            onChange={(e)=>{
                const fecha = new Date(e.currentTarget.value + "T00:00:00")
                values[props.campo] = fecha;
                validateForm();
            }}
        />
        {/* se verifica atraves de formik si hay errores se utiliza touched y error*/}
        {touched[props.campo] && errors[props.campo] ? 
        <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!}/> :null }
    </div>
    )
}

interface FormGroupFechaProps{
    campo:string;
    label:string;

}