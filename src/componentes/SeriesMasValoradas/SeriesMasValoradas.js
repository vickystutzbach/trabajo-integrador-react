import React, {Component} from "react";
import {Link} from "react-router-dom";
import CardSeriesMasValoradas from "../CardSeriesMasValoradas/CardSeriesMasValoradas";
import spinner from "../../img/spinner.gif"


class SeriesMasValoradas extends Component {
    constructor (){
        super();
        this.state = {
            seriesMasValoradas: [],
            isLoading: true
    }
}
componentDidMount(){ 
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=761d2122b56fefad1019c61f59cfea69')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            seriesMasValoradas: data.results,
            isLoading: false
        })
    })
    .catch(error => {
        console.error(error)
        this.setState({isLoading: false});
    })
}

render(){
    console.log(this.state.seriesMasValoradas)
    return (
    <div>
        <h1>Series Más Valoradas</h1>
        
        {this.state.isLoading ? (
            <div className="loading-container">
                <img src={spinner} alt="Cargando..." />
            </div>
        ) : (
            <section className="cards-container">
                {this.state.seriesMasValoradas.slice(0, 5).map((s) => (
                    <CardSeriesMasValoradas key={s.id} data={s} />
                ))}
            </section>
        )}
        <div className="character-card ver-todas-card">
            <Link to="/ver-todo-series-mas-valoradas" className="ver-todas-link"> Ver todo </Link>
        </div>
    </div>
    ) 

}

}

export default SeriesMasValoradas;