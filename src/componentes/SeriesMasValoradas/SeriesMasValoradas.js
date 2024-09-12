import React, {Component} from "react";
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
                <div style={{ textAlign: "center" }}>
                    <img src={spinner} alt="Cargando..." />
                </div>
            ) : (
                this.state.seriesMasValoradas.slice(0, 5).map((s) => <CardSeriesMasValoradas key={s.id} data={s}/>)
            )}
        </div>
    ) 

}

}

export default SeriesMasValoradas;