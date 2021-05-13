// Para yo poder utilizar el hook de context tengo que crear un contexto para eso uso 
// esta clase para crear el contexto de los valores que voy a compartir a los demas componentes
import React from 'react' 


const ValorContext = React.createContext('Valor por defecto');



export default ValorContext