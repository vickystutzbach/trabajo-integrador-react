import React, {Component} from "react";
import CardSeriesMasValoradas from "../../CardSeriesMasValoradas/CardSeriesMasValoradas";


class VerTodoSeriesMasValoradas extends Component {
    constructor (){
        super();
        this.state = {
            verTodoSeriesMasValoradas: []
    }
}
componentDidMount(){ 
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=761d2122b56fefad1019c61f59cfea69')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            verTodoSeriesMasValoradas: data.results
        })
    })
    .catch(error => console.error(error))
    }

render(){
    console.log(this.state. verTodoSeriesMasValoradas)
    return (
        <div>
            <h1>Series Mas Valoradas</h1>

            {this.state. verTodoSeriesMasValoradas.length === 0 ?
            <h3>Cargando...</h3>:
            this.state. verTodoSeriesMasValoradas.map((s)=><CardSeriesMasValoradas data={s}/>)}
        </div>
    ) 

}

}

export default VerTodoSeriesMasValoradas;