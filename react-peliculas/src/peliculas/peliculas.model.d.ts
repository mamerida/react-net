//creo la clase pelicula con sus atributos
export interface pelicula{
    id: number;
    titulo:string;
    poster:string;
}

export interface peliculaCreationDTO{
    titulo:string;
    enCines: boolean;
    trailer: string;
    /* el ? significa opcional   */
    fechaLanzamiento?:Date;
    poster?:File;
    posterURL?: string; 
}


export interface landingPageDTO{
    peliculasCartelera?: pelicula[];
    peliculasProximamente?:pelicula[];


}