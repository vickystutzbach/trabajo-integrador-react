import React, {Component} from "react";
import CardSeriesPopulares from "../../componentes/CardSeriesPopulares/CardSeriesPopulares";
import spinner from "../../img/spinner.gif"


class VerTodoSeriesPopulares extends Component { 
    constructor (){
        super();
        this.state = {
            verTodoSeriesPopulares: [],
            isLoading: true
    }
}
componentDidMount(){ 
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            verTodoSeriesPopulares: data.results,
            isLoading: false
        })
    })
    .catch(error => {
        console.error(error);
        this.setState({isLoading: false})})
    }

render(){
    console.log(this.state. verTodoSeriesPopulares)
    return (
        <div>
        <h1>Series Populares</h1>

        {this.state.isLoading ? (
            <div style={{ textAlign: "center" }}>
                <img src={spinner} alt="Cargando..." />
            </div>
        ) : (
            this.state.verTodoSeriesPopulares.map((s) => (
                <CardSeriesPopulares data={s} />
            ))
        )}
    </div>
    ) 

}

}



export default VerTodoSeriesPopulares;
