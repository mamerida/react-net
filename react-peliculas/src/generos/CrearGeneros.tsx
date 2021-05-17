
import { Link,useHistory } from "react-router-dom"
import Button from "../utils/Button";
import {Formik,Form, Field} from 'formik'

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
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    {/* field permite sincornizar el valor en el lavel con el initial value de formik */}
                    <Field name="nombre" className="form-control"/>
                </div>
                <Button type="submit"> Salvar</Button>
                <Link className="btn btn-secondary" to='/generos'>Cancelar</Link>
            </Form>
        </Formik>

        </>
        //  history.push('/generos') puedo decirle a donde quiero que navege el usuario indicando el path
    )
}