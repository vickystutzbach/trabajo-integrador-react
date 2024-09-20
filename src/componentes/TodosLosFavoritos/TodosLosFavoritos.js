import React from "react";
import Favoritos from "../Favoritos/Favoritos";



function TodosLosFavoritos(props) {
    let seriesFav = props.seriesFav
    console.log(seriesFav)

    return(
        <React.Fragment>
            {seriesFav.length === 0 ? 
            <h1>Aún no tienes películas favoritas</h1> :
            <h1>Películas favoritas</h1>}
            <ul>
                {seriesFav.map((series) => <li className="listaMostrarFavs"><Favoritos/></li>)}
            </ul>
        </React.Fragment>

    )
}

export default TodosLosFavoritos;