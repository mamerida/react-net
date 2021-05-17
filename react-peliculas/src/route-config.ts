import IndiceGeneros from './generos/indiceGeneros'
import LandingPage from './LandingPage'
import CrearGeneros from './generos/CrearGeneros'
import EditarGenero from './generos/EditarGeneros'


import CrearActores from './actores/CrearActores'
import EditarActores from './actores/EditarActores'
import IndiceActores from './actores/IndiceActores'

import CrearCines from './cines/CrearCines';
import IndiceCines from './cines/IndiceCines';
import EditarCines from './cines/EditarCines'; 


import FiltroPeliculas from './peliculas/FiltroPeliculas'
import CrearPeliculas from './peliculas/CrearPeliculas'
import EditarPeliculas from './peliculas/EditarPeliculas'

import RedirectALanding from './utils/RedirectALanding'


//para evitar tener todas las rutas en el main  directamente las puedo configurar aca 
//para poder extraer datos de la url tengo que asignarles una variable de ruta 
///:id(\\d+) indico que id va a ser numerico esto lo utilizo para leer la variable de ruta y usarlo en otros 
//componentes
const rutas = [
    {path:'/generos',componente: IndiceGeneros, exact:true},
    {path:'/generos/crear',componente: CrearGeneros},
    {path:'/generos/editar/:id(\\d+)',componente: EditarGenero},

    {path:'/actores',componente: IndiceActores, exact:true},
    {path:'/actores/crear',componente: CrearActores},
    {path:'/actores/editar/:id(\\d+)',componente: EditarActores},

    {path:'/cines',componente: IndiceCines, exact:true},
    {path:'/cines/crear',componente: CrearCines},
    {path:'/cines/editar/:id(\\d+)',componente: EditarCines},


    {path:'/peliculas/filtrar',componente: FiltroPeliculas},
    {path:'/peliculas/crear',componente: CrearPeliculas},
    {path:'/peliculas/editar/:id(\\d+)',componente: EditarPeliculas},

    {path :'/',componente :LandingPage, exact : true },
    //para evitar pantallas en blanco cuando no entiende la ruta nos vamos a colocar en un pad generico
    {path :"*", componente: RedirectALanding }


];

export default rutas;