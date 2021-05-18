//archivo necesario para poder usar las validaciones personalizables del yup
//modifico la clase para agregar mi propia validacion frente a los strings
import {StringSchema} from 'yup';//clase a editar 

declare module 'yup'{
    class StringSchema{
        primeraLetraMayuscula() :this;
    }
}