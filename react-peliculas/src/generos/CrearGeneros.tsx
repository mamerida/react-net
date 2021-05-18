
import { Link,useHistory } from "react-router-dom"
import Button from "../utils/Button";
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FromGropuText from '../utils/FormGroupText'
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero(){
    // Navegar por el usuario con un useHistory
    const history = useHistory();
    return(

        <>
        <h3>Crear Genero</h3>
        <Formik initialValues={{
            nombre:''
        }}
        onSubmit={values =>{
            console.log(values)
        }}
        // creo las validaciones 
        //validationSchema={Yup.object()}
        validationSchema={Yup.object({
            //comoco campo:Yup.el tipo de dato.validacion
            nombre:Yup.string().required('Este campo es requerido')

        })}
        >
            <Form>
                <FormGroupText campo ="nombre" label ="Nombre" placeholder="nombre genero"/>
                <Button type="submit"> Salvar</Button>
                <Link className="btn btn-secondary" to='/generos'>Cancelar</Link>
            </Form>
        </Formik>

        </>
        //  history.push('/generos') puedo decirle a donde quiero que navege el usuario indicando el path
    )
}