import React, {Component} from "react";
import CardSeriesPopulares from "../../CardSeriesPopulares/CardSeriesPopulares";


class VerTodoSeriesPopulares extends Component { 
    constructor (){
        super();
        this.state = {
            verTodoSeriesPopulares: []
    }
}
componentDidMount(){ 
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            verTodoSeriesPopulares: data.results
        })
    })
    .catch(error => console.error(error))
    }

render(){
    console.log(this.state. verTodoSeriesPopulares)
    return (
        <div>
            <h1>Series Mas Valoradas</h1>

            {this.state. verTodoSeriesPopulares.length === 0 ?
            <h3>Cargando...</h3>:
            this.state. verTodoSeriesPopulares.map((s)=><CardSeriesPopulares data={s}/>)}
        </div>
    ) 

}

}



export default VerTodoSeriesPopulares;
