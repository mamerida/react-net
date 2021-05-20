import { Form ,Formik, FormikHelpers } from "formik";
import { ActoresDTO } from "./Actores.model";
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Button';
import {Link} from "react-router-dom";
import * as Yup from "yup";
import FormGroupFecha from '../utils/FormGroupFecha';


export default function FormularioActores(props:FormularioActoresProps){

    return(
        <>
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre:Yup.string().required("este campo es obligatorio").primeraLetraMayuscula(),
                fechaNacimiento:Yup.date().nullable().required("este campo es obligatorio")
            })}>
        {(formikprops)=>(
            <Form>
                <FormGroupText campo="nombre" label="Nombre"></FormGroupText>
                <FormGroupFecha label ="Fecha de Nacimiento" campo="fechaNacimiento"/>
                <Button disabled={formikprops.isSubmitting} type="submit" >
                    Salvar
                </Button>
                <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
            </Form>
        )}
        </Formik>
        </>
    )
}

interface FormularioActoresProps{
    modelo:ActoresDTO;
    onSubmit(valores:ActoresDTO,acciones: FormikHelpers<ActoresDTO>): void
}