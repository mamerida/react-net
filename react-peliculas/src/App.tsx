import React, { useEffect, useState }  from 'react';
import './App.css';
import { landingPageDTO } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import Button from './../src/utils/Button'
import Menu from './utils/Menu'
import { Route, Switch } from 'react-router';
import IndiceGeneros from './generos/indiceGeneros';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import rutas from './route-config';


// npm i bootstrap@4.6 para instalar bootstrap en la app


function App() {

  //declaro la varible peliculas para poder cambiar el estado en pantalla

  

  //creo el time out para colocar un git de espera y usar patron dto
  


  // declaro pelicula de prueba y voy al return para que me la renderise

  // const peliculaPrueba : pelicula ={
  //   id:1, 
  //   titulo :"Spider-man",
  //   poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  // }





  return(
    // <>
    // <PeliculaIndividual pelicula={peliculaPrueba}/>
    // </>
    //aplico boostrat con el className
    <>
    <BrowserRouter>
    
    <Menu/>
    {/* coloco el container por arriba del switch para que sea global a todas las pestañas */}
    <div className="container">
    {/* esto es lo que me permite mostrar un componente u otro segun la ruta */}
    <Switch>
     {/* utilizo funcion map para generar cada route segun cada elemento de mi arreglo */}
      {rutas.map(ruta => <Route key ={ruta.path} path={ruta.path} exact ={ruta.exact}>
        <ruta.componente></ruta.componente>
      </Route>)}

    </Switch>
    </div>
    </BrowserRouter>

    {/* <Button>Mi componente boton</Button> */}


    
    </>
  )
}

export default App;



// Estado : datos de un componente que ante un cambio se vuelven a renderizar

      // {/* se especifica la ruta tengo que usar exact al no especificar el path*/}
      // <Route exact path="/">
      //   <LandingPage />
      // </Route>
      // {/* al especficar el path no hace falta colocar el exact */}
      // <Route path="/generos">
      //   <IndiceGeneros/>
      // </Route>