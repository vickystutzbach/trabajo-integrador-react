import React from "react";
import { Link } from 'react-router-dom';
import BuscarHeader from "../BuscarHeader/BuscarHeader";


/* FALTA AGREGAR EL LINK DE FAVORITOS Y VER TODO */
function ListaDeHeader(props) {
    return (
        <nav>
        <ul className="main-nav">
            <li> <Link to="/">{props.home}</Link></li> 
            <li> <Link to="/favoritos">{props.favoritos}</Link></li> 
            <li> <Link to="/vertodo">{props.vertodo}</Link></li>
        </ul>
        
        <BuscarHeader/>

        <ul className="logo">
        <img src="./img/logo1.png" alt="Logo" className="logo-image"/>
            
           
        </ul>
    </nav>
 
    )
}

export default ListaDeHeader;