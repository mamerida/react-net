import { useFormikContext } from "formik"
import { ChangeEvent, useState } from "react"

export default function FormGroupImagen(props: FormGroupImagen) {
    //se usa esta declaracion para que despues de subida la foto se actualice el front 
    const [imagen64, setImagen64] = useState("")
    //para cambiar tanto la imagen al momento de cargar una nueva como para modificar la url se crea un cambio
    const [imagenURL , setImagenURL] = useState(props.imagenURL)
    //para poder actualizar el formulario con la imagen tengo que actualizar el formik
    const { values } = useFormikContext<any>();

    const divStyle = { marginTop: "10px" }
    const imgStyle = { width: "450px" }

    const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const archivo = e.currentTarget.files[0]
            //coloco base64 .the para indicarle que cuando termine ejecute ese codigo 
            base64(archivo)
                .then((representacionBase64: string) => setImagen64(representacionBase64))
                .catch(error => console.error(error))
            //actualizo el campo con lo intruducido por el usuario 
            values[props.campo] = archivo
            setImagenURL('')
        }
    }
    const base64 = (File: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(File);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error)
        })
    }

    return (
    <div className="form-group">
        <label>{props.label}</label>
        {/* accept limita el tipo de dato a subir  onChange accion cuando el usuario suba un archivo*/}
        <div>
            <input type="file" accept=".jpg,.jprg,.png" onChange={ManejarOnChange} />
        </div>
        {imagen64 ?
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imagen64} alt="imagen seleccionada " />
                </div>
            </div> : null
        }
        {/* creo el mismo manejo de imagenes para las url  */}
        {imagenURL ?
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenURL} alt="imagen seleccionada " />
                </div>
            </div> : null
        }
    </div>
    )
}

interface FormGroupImagen {
    campo: string;
    label: string;
    imagenURL: string;
}

FormGroupImagen.defaultProps ={
    imagenURL: ''
}
