import {Form, Formik, FormikHelpers} from "formik"
import { peliculaCreationDTO } from "./peliculas.model"
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox"
import FormGroupFecha from "../utils/FormGroupFecha"
import FormGroupFoto from "../utils/FormGroupFoto"
import Button from "../utils/Button";



export default function FormularioPeliculas(props:formularioPeliculasProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                titulo: Yup.string().required("Este cambio es requerico").primeraLetraMayuscula()
            })}
        >
            {formilProps =>(
                <Form>
                    <FormGroupText label = "titulo" campo = "titulo" />
                    <FormGroupCheckbox label ="en cines" campo ="enCines"/>
                    <FormGroupText label = "trailer" campo = "trailer" />
                    <FormGroupFecha label = "fecha Lanzamiento" campo = "fechaLanzamiento" />
                    <FormGroupFoto campo="poster" label="poster" imagenURL={props.modelo.posterURL}/>
                    <Button disabled={formilProps.isSubmitting} type="submit">Enviar</Button>
                      
                </Form>
            )}
        </Formik>
    )
}


interface formularioPeliculasProps{
    modelo : peliculaCreationDTO;
    onSubmit(valores: peliculaCreationDTO , acciones: FormikHelpers<peliculaCreationDTO>) :void;
}