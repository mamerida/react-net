import { cineCreacionDTO } from "./cines.model";
import { FormikHelpers,Formik,Form } from 'formik';
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import {Link} from "react-router-dom";
import MapaFormulario from './../utils/MapaFormulario'
import { coordenadaDTO } from "../utils/coordenadas.model";

export default function sFormularioCines(props:formularioCinesProps){
    //maneja las coordenadas a la hora de mostrar 
    function transformarCoordenada() : coordenadaDTO[] | undefined {
        if(props.modelo.latitud && props.modelo.longitud){
            const respuesta:coordenadaDTO = {
                lat:props.modelo.latitud,
                lng: props.modelo.longitud
            }
            return [respuesta];
        }
            return undefined
    }
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula()
            })}
        >
            {(formikProps) =>(
                <Form>
                    <FormGroupText label="Nombre" campo ="nombre  "></FormGroupText>
                    <MapaFormulario campoLat="latitud" campoLng="longitud" 
                        coordenadas={transformarCoordenada()}
                    />
                    <Button disabled={formikProps.isSubmitting} type ="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cines"> Cancelar </Link>
                </Form>
            )}
        </Formik>

    )
}

interface formularioCinesProps{
    modelo:cineCreacionDTO
    onSubmit(valores:cineCreacionDTO, acciones:FormikHelpers<cineCreacionDTO>):void
}