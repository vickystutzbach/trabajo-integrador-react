import React, {Component} from "react";
import CardSeriesPopulares from "../CardSeriesPopulares/CardSeriesPopulares";

class SeriesPopulares extends Component {
    constructor (){
        super();
        this.state = {
            seriesPopulares: []
    }
}
componentDidMount(){
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            seriesPopulares: data.results
        })
    })
    .catch(error => console.error(error))
    }

render(){
    console.log(this.state.seriesPopulares)
    return (
        <div>
            <h1>Series Populares</h1>
            
            {this.state.seriesPopulares.length === 0 ?
            <h3>Cargando...</h3>:
            this.state.seriesPopulares.slice(0, 5).map((s)=><CardSeriesPopulares data={s}/>)}
        </div>
    ) 

}

}

export default SeriesPopulares;
