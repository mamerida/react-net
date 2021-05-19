import FormularioActores from './FormularioActores'
export default function EditarActores(){
    return(
        <>
        <h3>Editar Actores </h3>
        <FormularioActores
        modelo={{nombre:'Mario', fechaNacimiento:new Date("1996-06-01")}}
        onSubmit={valores =>console.log(valores)}
        />
        </>
    )
}