import AppCSS from "./App.module.css"
//app.css especifico necesito importar index.css es global
export default function EjemploCSS(){
    //colocar estilos como una CLASE
  const cuadradoAzul ={
    backgroundColor:"blue", 
    width: "50px" ,
    height: "50px",
    marginLeft :"1rem"
  }

  //mostrar contenido de una variable en un usuario
  const subtitulo = " Hola soy un subtitulo";
  {/* se deberia colocar valor:number */}
  const duplicar = (valor:number) =>valor * 2;
    
    return(
    <>
    {/* class es HTML pero no es class es clasename al tratarse de jsx   */}


    {/* cuadrado de estilo con import de clase  */}
    <div className ="cuadradoRojo"></div>
    {/* estilo en linea directamente en jsx en linea */ }
    <div style={{backgroundColor:"green", width: "50px" ,height: "50px",marginLeft :"1rem"}}></div>
    <div style={cuadradoAzul}></div>
    <br></br>
    <div style={cuadradoAzul}></div>

    <h1 className ="rojo">Hola mundo</h1>
    {/* para introducirlo la coloco entre llaves para definir una clase y adjunto elemenos dentro de llaves*/}
    {/*styles son reglas de estilo en react*/}
    <h3 style={{color:"blue"}}>{subtitulo.toLocaleUpperCase()}</h3>
    {/* introducir funciones */}
    <h4>El doble de 3 es {duplicar(3)}</h4>
    {/* introducir valores booleanos*/}
    <div>
      <input type="checkbox" checked ={false}/> Este es un checkbox
    </div>
    {/* Utilizar modulo de css cuando tengo clases repetidas o usar algo mas representativo */}
    {/* Que le asigna un string aleatorio a cada modulo para diferenciarlo */}
    <h4 className ={AppCSS.color} >Prueba Modulo Css</h4>
    </>
    )
}