// crear un componente de cero para encapsular responsabilidades
export default function MostrarTexto(props:any){
    return(
        <div>
            {/* como no tento acceso a texto tengo que usar una propiedad props  */}
            {props.texto}
        </div>

    )

}
//esto se usa para comunicar los datos del componente con el html
interface mostrarTextoProps{
    texto :string;
}

//Defautprops para mostrar texto en vez de un operador ternario 
//cuando le coloco un defautprops lo hago valor optativo

MostrarTexto.defaultProps = {
    texto : 'valor por defencto defautprops'

}