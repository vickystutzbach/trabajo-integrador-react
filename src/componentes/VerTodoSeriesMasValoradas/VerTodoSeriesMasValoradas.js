import React, { Component } from "react";
import CardSeriesMasValoradas from "../CardSeriesMasValoradas/CardSeriesMasValoradas";
import spinner from "../../img/download.gif";
import FiltroSeriesMasValoradas from "../FIltro/FiltroSeriesMasValoradas";

class VerTodoSeriesMasValoradas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verTodoSeriesMasValoradas: [],
            isLoading: true,
            backup: []
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
            <div>
                <h1>Series Más Valoradas</h1>
                <FiltroSeriesMasValoradas filtrarSeriesMasValoradas={(serie) => this.filtrarSeriesMasValoradas(serie)}/>

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
        );
    }
}

export default VerTodoSeriesMasValoradas;
