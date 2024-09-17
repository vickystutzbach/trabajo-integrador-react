import React, {Component} from "react";
import CardSeriesMasValoradas from "../../componentes/CardSeriesMasValoradas/CardSeriesMasValoradas";
import spinner from "../../img/spinner.gif";

class VerTodoSeriesMasValoradas extends Component {
    constructor (){
        super();
        this.state = {
            verTodoSeriesMasValoradas: [],
            isLoading: true
    }
}
componentDidMount(){ 
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=761d2122b56fefad1019c61f59cfea69')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            verTodoSeriesMasValoradas: data.results,
            isLoading: false
        })
    })
    .catch(error => {
        console.error(error);
        this.setState({isLoading: false});
    })
    }

render(){
    console.log(this.state.verTodoSeriesMasValoradas)
    return (
        <div>
                <h1>Series Más Valoradas</h1>

                {this.state.isLoading ? (
                    <div style={{ textAlign: "center" }}>
                        <img src={spinner} alt="Cargando..." />
                    </div>
                ) : (
                    <section className="cards-container">
                        {this.state.verTodoSeriesMasValoradas.map((s) => (
                            <CardSeriesMasValoradas key={s.id} data={s} />
                        ))}
                    </section>
                )}
            </div>
    ) 

}
}

export default VerTodoSeriesMasValoradas;