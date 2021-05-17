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


//para evitar tener todas las rutas en el main  directamente las puedo configurar aca 
const rutas = [
    {path:'/generos',componente: IndiceGeneros, exact:true},
    {path:'/generos/crear',componente: CrearGeneros},
    {path:'/generos/editar',componente: EditarGenero},

    {path:'/actores',componente: IndiceActores, exact:true},
    {path:'/actores/crear',componente: CrearActores},
    {path:'/actores/editar',componente: EditarActores},

    {path:'/cines',componente: IndiceCines, exact:true},
    {path:'/cines/crear',componente: CrearCines},
    {path:'/cines/editar',componente: EditarCines},


    {path:'/peliculas/filtrar',componente: FiltroPeliculas},
    {path:'/peliculas/crear',componente: CrearPeliculas},
    {path:'/peliculas/editar',componente: EditarPeliculas},

    {path :'/',componente :LandingPage, exact : true }


];

export default rutas;