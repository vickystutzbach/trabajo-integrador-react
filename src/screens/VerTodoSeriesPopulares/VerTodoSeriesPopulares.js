import React, { Component } from "react";
import CardSeriesPopulares from "../../componentes/CardSeriesPopulares/CardSeriesPopulares";
import spinner from "../../img/spinner.gif";
import FiltroSeriesPopulares from "../../componentes/FIltro/FIltroSeriesPopulares";

class VerTodoSeriesPopulares extends Component {
    constructor() {
        super();
        this.state = {
            verTodoSeriesPopulares: [],
            isLoading: true,
            backup: []
        };
    }

    componentDidMount() {
        fetch(
            "https://api.themoviedb.org/3/tv/popular?api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    verTodoSeriesPopulares: data.results,
                    isLoading: false,
                    backup: data.results 
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false });
            });
    }

    filtrarSeriesPopulares(serie) {
        let seriesFiltradas = this.state.backup.filter((s) => {
            let name = s.name || s.original_name; 
            return name && name.toLowerCase().includes(serie.toLowerCase());
        });
        this.setState({
            verTodoSeriesPopulares: seriesFiltradas 
        });
    }

    render() {
        console.log(this.state.verTodoSeriesPopulares);
        return (
            <div>
                <h1>Series Populares</h1>
                <FiltroSeriesPopulares
                    filtrarSeriesPopulares={(serie) =>
                        this.filtrarSeriesPopulares(serie)
                    }
                />

                {this.state.isLoading ? (
                    <div style={{ textAlign: "center" }}>
                        <img src={spinner} alt="Cargando..." />
                    </div>
                ) : (
                    <section className="cards-container">
                        {this.state.verTodoSeriesPopulares.map((s) => (
                            <CardSeriesPopulares key={s.id} data={s} />
                        ))}
                    </section>
                )}
            </div>
        );
    }
}

export default VerTodoSeriesPopulares;
