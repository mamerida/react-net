//para poder pedir en editar los datos los debo colocar en el dto
export interface ActoresDTO{
    nombre:string;
    fechaNacimiento?:Date;
    foto?:File;
    fotoURL?:string;
}