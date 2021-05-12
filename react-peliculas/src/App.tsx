import React , {useState} from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import ProyectarContenidos from './proyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import ContenidoDinamico from './ContenidoDinamico';
import { callbackify } from 'node:util';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';




function App() {
  const [texto ,setTexto] = useState(' valor por defecto')
  const [checked , setChecked] =useState(true);
  const [checkeduf , setCheckeduf] =useState(true);
  const manejarClick = () => console.log("click")

  const ManejarKeyUp = (e :string) =>{
    // Obtengo lo que el usuario esta escribiendo
    console.log(e);
    //con esta variable muestro en la pagina lo que el usuario esta escribiendo
    //en este caso al tratarse de una constante no puedo redefinirla, tengo que ysar el useState
    //texto = e.currentTarget.value;
    setTexto(e);
  }

  const imagenURL ="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl"
 
  const estilo= {
    backgroundColor : "red" , width :"50px",height :"50px", marginleft : "1rem"
  }

  const parteInferior = <div style ={estilo}></div>

  //copiar contenido de UI
  const calificaciones = [
    {nombre :"Mario", calificacion :86},
    {nombre :"Estela", calificacion :50},
    {nombre :"Fernando", calificacion :99}

  ]
  
  return(
    <>
    {/* contenido dinamico */}
    {/* <ContenidoDinamico   calificacion ={95}/> */}
    
    {/* quiero repetir el contenido dinamico por cada elemento del arreglo */}
    {/* con funcion map */}
    {/* se utiliza un identificador unico para poder idenficar cada elemento dentro del arreglo  */}

    {calificaciones.map (cal => <ContenidoDinamico key ={cal.nombre} {...cal}/>)}



    {/* lo abro de esta manera por que lo que se coloque entre medio va a ser pasado a children */}


    {/* <ProyectarContenidos>
      <>
      <span>Hola proyectando contenido</span>
      </>
    </ProyectarContenidos> */}




    <ProyectarContenido2
        // se muestra esto por que no esta difefinida la parte superior 
        // parteSuperior ={<h3>Esta es la parte de arriba</h3>}
        parteIntermedia ={<h2>Soy el centro deberia haber otra cosa pero no lo tengo hecho</h2>}
        parteInferior = {parteInferior}

    />


    {/* introducir imagne  */}
    {/* <img alt="logo reack" src={imagenURL}/>  */}

        {/* importo el componente Ej use effect */}
        
        <input type="checkbox" 
        onChange={(e)=>setCheckeduf(e.currentTarget.checked)}
        checked = {checkeduf}
        /> Mostrar componente useEffect
        {checkeduf ? <EjemploUseEffect /> :null }



    <br></br>

    <h1 className ="rojo"> Hola Mundo</h1>
    {/* ejecutar una accion react desde funcion aparte onMouse onClick son eventos de html */}
    <button 
    onMouseEnter ={()=>{console.log("Entrando")}}
    onClick={manejarClick}>Hazme click</button>
    {/* ejecutar una accion react desde el boton  */}
1    <button onClick={()=>{console.log("funcion desde el boton")}}>Hazme click</button>
    <br></br>

    {/* genero un ejemplo donde el imput este en un componente  */}
    {/* onkeyup cuando el usuario escribe */}
    {/* <input type="text"
      onKeyUp ={(e) => ManejarKeyUp(e)}
    /> */}
  {/* utilizo la funcion e importo el componente */}
  <FormularioTexto ManejarKeyUp={(e:string) => ManejarKeyUp(e)} />



    {/* Obtener una variable de lo que escribe el usuario */}
    {/*<div> escribo el valor de la variable no se actualiza por que no se vuelve a renderizar 
      {texto}
      esto es poco practico mejor mandarlo directamente a un componente a parte
    </div>*/}
    {/* Mostrar texto lo importo como etiqueta html  */}
    <MostrarTexto texto ={texto}/>

    {/* pasar contenido IU a un componente */}
    <div>
      <input type = "checkbox"
      //Lo uso para cambiar el estado del check  
      onChange={(e) =>setChecked(e.currentTarget.checked)} checked ={checked}/> Este es un checkbox

    </div>
    </>
  )
}

export default App;



// Estado : datos de un componente que ante un cambio se vuelven a renderizar