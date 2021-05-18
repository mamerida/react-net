export default function MostrarErrorCampo(props:MostrarErrorCampoprops) {
    return(
        <>
        <div className="text-danger">{props.mensaje}</div>
        </>
    )
}

interface MostrarErrorCampoprops{
    mensaje:string

}