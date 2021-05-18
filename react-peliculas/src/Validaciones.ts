// archivo donde va a contener las validaciones de mi programa
import * as Yup from "yup";
export default function configurarValidaciones() {
    //addMethod(tipo de dato, nombre de la funcion, funcion)
    Yup.addMethod(Yup.string,'primeraLetraMayuscula',function(){
        return this.test('primera-letra-mayusculas' ,'la primera letra debe ser mayusculas',function(valor){
            if (valor && valor.length >0){
                const primerLetra = valor.substring(0,1) // tomo atraves de substring la primera letra
                return primerLetra === primerLetra.toUpperCase()
            }
            return true;

        })
    })

    //aca puedo colocar mas validaciones 
}