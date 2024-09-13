import React, {Component} from "react";
import {Link} from "react-router-dom";
import CardSeriesPopulares from "../CardSeriesPopulares/CardSeriesPopulares";
import spinner from "../../img/spinner.gif"

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
        console.error(error)
        this.setState({isLoading: false})})
    }

render(){
    console.log(this.state.seriesPopulares)
    return (
        <div>
            <h1>Series Populares</h1>
            
            {this.state.isLoading ? (
                <div style={{ textAlign: "center" }}>
                    <img src={spinner} alt="Cargando..." />
                </div>
            ) : (
                this.state.seriesPopulares.slice(0, 5).map((s) => <CardSeriesPopulares  data={s}/>)
            )}

        </div>
    ) 

}

}

export default SeriesPopulares;
