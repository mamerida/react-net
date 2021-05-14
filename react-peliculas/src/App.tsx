import React, { useEffect, useState }  from 'react';
import './App.css';
import { landingPageDTO } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas'





function App() {

  //declaro la varible peliculas para poder cambiar el estado en pantalla

  const [peliculas,setPeliculas] = useState<landingPageDTO>({})

  //creo el time out para colocar un git de espera y usar patron dto
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setPeliculas({peliculasCartelera :
        [
          {
            id:2,
            titulo:"Mohana",
            poster:'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            id:3,
            titulo:"Minios",
            poster:'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
        ],peliculasProximamente:
        [
          {
            id:4,
            titulo:"Avatar",
            poster:'https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
          {
            id:5,
            titulo:"Demon Slayer",
            poster:'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_UX182_CR0,0,182,268_AL_.jpg'
          },
        ]

      })

    },3000)
      return () => clearTimeout(timerId);
  })


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
    <>
    <h3>Peliculas en cartelera </h3>
    <ListadoPeliculas peliculas={peliculas.peliculasCartelera}/>
    <h3>Proximamente</h3>
    <ListadoPeliculas peliculas={peliculas.peliculasProximamente}/>
    </>
  )
}

export default App;



// Estado : datos de un componente que ante un cambio se vuelven a renderizar