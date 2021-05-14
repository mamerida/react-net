//creo la clase pelicula con sus atributos
export interface pelicula{
    id: number;
    titulo:string;
    poster:string;
}


export interface landingPageDTO{
    peliculasCartelera?: pelicula[];
    peliculasProximamente?:pelicula[];


}