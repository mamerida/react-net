// se utiliza un metodo de clase por que no esta disponible en metodos funcionales

import React, { ReactElement } from "react";
// React.Component<aca se le pasa el tipo de dato de props y el tip odato state >
// Se trata de objeto y funcion para cambio de estado 
export default class ErrorBoundary extends React.Component<errorBoundaryProps,errorBoundaryState>{
    constructor(props:errorBoundaryProps){
        super(props);//para trabajar con la clase padre
        this.state = {hayError : false , MensajeDeError : ''}
    }
    //razon por la cual no se puede usar con componente funcional
    componentDidCatch(error :any ,errorInfo :any){
        console.log(error)
        console.log(errorInfo)
    }
    //esta funcion maneja si hay error 
    static getDerivedStateFromError(error:any){
        console.log(error)
        return{hayError : true , mensMensajeDeError:error}
    }
    //Determina lo que se va a renderizar 
    render(){
        if(this.state.hayError){
            if(this.props.errorUI){
                return this.props.errorUI;
            }else{
                return this.state.MensajeDeError;
            }
        }
        //se retorna children por que hace referencia al codigo del error 
        return this.props.children;

    }
}

interface errorBoundaryState {
    hayError : boolean;
    MensajeDeError : string;

}

interface errorBoundaryProps{
    errorUI: ReactElement

}