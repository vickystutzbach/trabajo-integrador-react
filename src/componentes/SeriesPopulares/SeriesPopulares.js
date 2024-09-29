import React, {Component} from "react";
import {Link} from "react-router-dom";
import CardSeriesPopulares from "../CardSeriesPopulares/CardSeriesPopulares";
import spinner from "../../img/download.gif"

class SeriesPopulares extends Component {
    constructor (){
        super();
        this.state = {
            seriesPopulares: [],
            isLoading: true
    }
}
componentDidMount(){
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            seriesPopulares: data.results,
            isLoading: false
        })
    })
    .catch(error => {
        console.log(error)
        this.setState({isLoading: false})})
    }

render(){
    return (
    <div>
        <h1>Series Populares</h1>

        {this.state.isLoading ? (
            <div className="loading-spinner">
                <img src={spinner} alt="Cargando..." />
            </div>
        ) : (
            <section className='cards-container'>
                {this.state.seriesPopulares.slice(0, 5).map((s) => (
                    <CardSeriesPopulares  data={s} />
                ))}
            </section>
        )}

        <div className="character-card ver-todas-card">
            <Link to="/ver-todo-series-populares" className="ver-todas-link"> Ver todo </Link>
        </div>
    </div>

    ) 

}

}

export default SeriesPopulares;
