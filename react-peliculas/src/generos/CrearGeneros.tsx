import { useHistory } from "react-router-dom"
import Button from "../utils/Button";

export default function CrearGenero(){
    // Navegar por el usuario con un useHistory
    const history = useHistory();
    return(

        <>
        <h3>Crear Genero</h3>
        <Button onClick ={() => history.push('/generos')}>Salvar</Button>
        </>
        //  history.push('/generos') puedo decirle a donde quiero que navege el usuario indicando el path
    )
}