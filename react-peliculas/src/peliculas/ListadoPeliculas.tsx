import {pelicula} from './peliculas.model'
import PeliculaIndividual from './PeliculaIndividual'
import css from './ListadoPeliculas.module.css'
// import Cargando from './../utils/Cargando'
import ListadoGenerico from './../utils/ListadoGenerico'


export default function ListadoPeliculas (props: listadoPeliculasProps){

        return(
            //<ListadoGenerico  listado ={props.peliculas} aca podria colocar cargandoUI ={} o vacio para d
            // indicar lo que quiero mostrar en caso de que no me guste lo que haya por defecto >
            <ListadoGenerico  listado ={props.peliculas} >
            <div className={css.div}>
                {/* se le coloca ? por poder ser indefinido al momento de cargar  */}
                {props.peliculas?.map(pelicula => 
                <PeliculaIndividual pelicula={pelicula}
                                    key ={pelicula.id}
                />)}
            </div>  
            </ListadoGenerico>
        )

    }



interface listadoPeliculasProps{
    peliculas? : pelicula[]
}