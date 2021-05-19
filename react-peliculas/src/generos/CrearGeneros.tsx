
import { Link, useHistory } from "react-router-dom"
import FormularioGeneros from './FormularioGeneros'

export default function CrearGenero() {
    // Navegar por el usuario con un useHistory
    const history = useHistory();
    return (

        <>
            <h3>Crear Genero</h3>
            <FormularioGeneros modelo={{nombre:""}} 
                onSubmit={async (valores) =>{
                    await new Promise(r =>setTimeout(r,3000))
                    console.log(valores)
                }}
            />
        </>
        //  history.push('/generos') puedo decirle a donde quiero que navege el usuario indicando el path
    )
}