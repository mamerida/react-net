
import { NavLink } from "react-router-dom";

export default function Menu(){
    //se crea este variable para indicar en que pagina esta el usuario
    const claseActiva = "active"
    return(
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
                <NavLink className ="navbar-brand" activeClassName={claseActiva} to="/">React Peliculas </NavLink>
                <div className ="collapse navbar-collapse">
                    <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className = "nav-link"  activeClassName={claseActiva} to="/generos">
                                Generos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = "nav-link"  activeClassName={claseActiva} to="/peliculas/filtrar">
                                Filtrar Peliculas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = "nav-link"  activeClassName={claseActiva} to="/actores">
                                Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = "nav-link"  activeClassName={claseActiva} to="/cines">
                                Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = "nav-link"  activeClassName={claseActiva} to="/peliculas/crear">
                                Crear Peliculas
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
//tengo que instalar react router para poder configurar la pagina para que haga el ruteo de la misma
//se usa NavLink en vez de a por que eso evita que regarge toda la pagina 

//para instalar react router comando
//npm i react-router-dom@5.2
//para poder usar las librerias de typescript
//npm i --save-dev @types/react-router-dom