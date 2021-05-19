import { Link, useHistory } from "react-router-dom"
import Button from "../utils/Button";
import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import React from 'react';
import {generoCreacionDTO} from './generos.model'

export default function FormularioGeneros(props: formularioGenerosProps) {
    return (
        <>
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            // creo las validaciones 
            //validationSchema={Yup.object()}
            validationSchema={Yup.object({
                //comoco campo:Yup.el tipo de dato.validacion
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {/* inicio a las propiedades de formik para poder deshabilitar el boton mientras se envia el formulario */}
            {(Formikpros) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" placeholder="nombre genero" />
                    <Button disabled={Formikpros.isSubmitting} type="submit"> Salvar</Button>
                    <Link className="btn btn-secondary" to='/generos'>Cancelar</Link>
                </Form>
            )}
        </Formik>

        </>
    )
}

interface formularioGenerosProps{
    // al llamar a formulario genero tengo acceso a modelo o onSubmit
    modelo: generoCreacionDTO;
    onSubmit(valores:generoCreacionDTO , accion:FormikHelpers<generoCreacionDTO>) :void;
}


// onSubmit={async values => {
//     await new Promise(r => setTimeout(r, 100));
//     console.log(values);
// }}