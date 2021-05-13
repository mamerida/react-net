import React  from 'react';
import './App.css';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/peliculas.model';





function App() {
  // declaro pelicula de prueba y voy al return para que me la renderise
  const peliculaPrueba : pelicula ={
    id:1, 
    titulo :"Spider-man",
    poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }
  return(
    <>
    <PeliculaIndividual pelicula={peliculaPrueba}/>
    </>
  )
}

export default App;



// Estado : datos de un componente que ante un cambio se vuelven a renderizar