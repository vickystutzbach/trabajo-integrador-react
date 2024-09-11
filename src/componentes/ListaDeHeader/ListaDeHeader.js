import React from "react";
import { Link } from 'react-router-dom';


/* FALTA AGREGAR EL LINK DE FAVORITOS Y VER TODO */
function ListaDeHeader(props) {
    return (
        <nav>
        <ul className="main-nav">
            <li> <Link to="/">{props.home}</Link></li> 
            <li> {props.favoritos}</li> 
            <li> {props.vertodo}</li>


        </ul>
        <ul className="logo">
        <img src="./img/logo.png" alt="Logo" className="logo-image"/>
            
           
        </ul>
    </nav>
 
    )
}

export default ListaDeHeader