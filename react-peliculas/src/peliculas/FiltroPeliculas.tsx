import {Field, Form ,Formik} from "formik";
import { GeneroDTO } from "../generos/generos.model";
import Button from "../utils/Button";

export default function FiltroPeliculas(){
    //creo un objeto de valor inicial
    const ValorInicial:FiltroPeliculasForm ={
        titulo :"",
        generoId:0,
        proximosEstrenos:false,
        enCartelera:false
    } 
    //creo unos generos para poder mostrar 
    const generos:GeneroDTO[] = [{id: 1 , nombre:"Accion"},{id:2 , nombre:"Comedia"},{id:3 , nombre:"Drama"}] 
    return(
        <>
        <h3>Filtrar Peliculas</h3>

        <Formik initialValues ={ValorInicial}
                onSubmit ={valores =>console.log(valores)}
        >
        {/* tengo que modificar las propiedades de formik para agregarle el estilo de bootstrap */}
        {(FormikProps)=>(
            <Form>
                <div className="form-inline">
                    {/* colocar el titulo de la pelicula */}
                    <div className ="form-group mb-2">
                        <label htmlFor ="titulo" className="sr-only">Titulo</label>
                        {/* input type ="text" con formik */}
                        <input type="text" className="form-control" id="titulo"
                        placeholder="Titulo de la pelicula"
                        // agregado para poder trabajar con formik y devuelve el atributo
                        {...FormikProps.getFieldProps("titulo")}
                        />
                    </div>
                    {/* seleccionar el genero */}
                    <div className="form-group mx-sm-3 mb-2">
                        <select className="form-control"
                        {...FormikProps.getFieldProps("generoId")}
                        >
                            <option value="0">---Seleccione un genero---</option>
                            {generos.map(
                                genero=><option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                )}
                        </select>
                    </div>
                    {/* CheckBox para seleccionar si esta en cartelera o proximo estrens */}
                    <div className="form-group mx-sm-3 mb-2">
                        <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" 
                        type="checkbox"/>
                        <label className="form-check-label" htmlFor="proximosEstrenos"> Proximos Estrenos</label>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <Field className="form-check-input" id="EnCines" name="EnCines" 
                        type="checkbox"/>
                        <label className="form-check-label" htmlFor="EnCines"> En Cines</label>
                    </div>
                    <Button
                        className="btn btn-primary mb-2 mx-sm-3"
                        type="submit"
                        // onClick={() => FormikProps.submitForm()}
                    >Filtrar</Button>
                    <Button
                        className="btn btn-danger mb-2"
                        onClick={()=>{ FormikProps.setValues(ValorInicial)}}
                    >Limpiar</Button>
                </div>
            </Form>

        )}
        </Formik>
        </>
    )

}

//creo una interface con los datos de mi formulario 

interface FiltroPeliculasForm{
    titulo:string;
    generoId: number;
    proximosEstrenos:boolean;
    enCartelera:boolean;
}