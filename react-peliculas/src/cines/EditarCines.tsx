import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
        <h3>Editar Cines </h3>
        <FormularioCines
            modelo={{nombre:'Sambil' ,latitud:-32.937015,longitud: -68.845784 }}
            onSubmit={valores => console.log(valores)}
        />
        </>
    )
}