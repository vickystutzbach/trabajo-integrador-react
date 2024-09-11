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
    //tengo que cambiar la api porque es de peliculas, pero es de prueba para ver si anda. 
    fetch('https://api.themoviedb.org/3/movie/550?api_key=aa7bab2a0951387ff624d304c5d79062&language=en-US&page=1')
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
            this.state.seriesPopulares.map((s)=><CardSeriesPopulares data={s}/>)}
        </div>
    ) 

}

}

export default SeriesPopulares;
