import React, { Component } from "react";
import CardSeriesMasValoradas from "../../componentes/CardSeriesMasValoradas/CardSeriesMasValoradas";
import spinner from "../../img/download.gif";
import FiltroSeriesMasValoradas from "../../componentes/FIltro/FiltroSeriesMasValoradas";

class VerTodoSeriesMasValoradas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verTodoSeriesMasValoradas: [],
            isLoading: true,
            backup: [],
            valor: 2
        };
    }

    componentDidMount() {
        fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=761d2122b56fefad1019c61f59cfea69"
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    verTodoSeriesMasValoradas: data.results,
                    backup: data.results,
                    isLoading: false
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false });
            });
    }
    
    verMass() {
        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${this.state.valor}&api_key=761d2122b56fefad1019c61f59cfea69`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    verTodoSeriesMasValoradas: this.state.verTodoSeriesMasValoradas.concat(data.results),
                    backup: this.state.backup.concat(data.results),
                    valor: this.state.valor + 1

                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false });
            });


    }

    filtrarSeriesMasValoradas(serie) {
        let seriesFiltradas = this.state.backup.filter((s) =>
            s.name
                ? s.name.toLowerCase().includes(serie.toLowerCase())
                : s.original_name.toLowerCase().includes(serie.toLowerCase())
        );
        this.setState({
            verTodoSeriesMasValoradas: seriesFiltradas
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Series Más Valoradas</h1>
                    <FiltroSeriesMasValoradas filtrarSeriesMasValoradas={(serie) => this.filtrarSeriesMasValoradas(serie)} />

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
                <section className="boton-ver-mas">
                     {this.state.valor < 100 ? <button onClick={()=> this.verMass ()}> Ver mas </button> : "" } 
                </section>
               
            </React.Fragment>
        );
    }
}

export default VerTodoSeriesMasValoradas;
