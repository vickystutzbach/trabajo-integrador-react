import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardSeriesMasValoradas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: props.data,
            verMas: false,
            textoFav: "Agregar a favoritos"
        };
    }

    alternarVisibilidad() {
        this.setState({ verMas: !this.state.verMas });
    }

    agregarFavorito() {
        let seriesPopulares = localStorage.getItem('Favoritos');
        let arraySeriesPopulares = JSON.parse(seriesPopulares) || []; 

        if (arraySeriesPopulares.filter((series) => series.id === this.state.series.id).length === 0) {
            arraySeriesPopulares.push(this.state.series);
            localStorage.setItem('Favoritos', JSON.stringify(arraySeriesPopulares));
            this.setState({
                textoFav: "Eliminar de favoritos"
            });
        } else {
            let nuevoArrayFav = arraySeriesPopulares.filter((series) => series.id !== this.state.series.id);
            localStorage.setItem('Favoritos', JSON.stringify(nuevoArrayFav));

            this.setState({
                textoFav: "Agregar a favoritos"
            });
        }
    }

    render() {
        let seriesPopulares = localStorage.getItem('Favoritos');
        let arraySeriesPopulares = JSON.parse(seriesPopulares) || []; 
        const isFavorite = arraySeriesPopulares.filter(serie => serie.id === this.state.series.id).length > 0;

        return (
            <section className='cards-container'>
                <div>
                    <article className='character-card'>
                        <img src={`https://image.tmdb.org/t/p/w342${this.props.data.backdrop_path}`} alt={this.props.data.name} />
                        <h2>{this.props.data.name}</h2>

                        <p className='more' onClick={() => this.alternarVisibilidad()}>Ver descripcion</p> 
                        <section className={'extra ' + (this.state.verMas ? "show" : "hide")}>
                            <p>{this.props.data.overview}</p>
                        </section>
                        <p className='more'>
                            <Link to={`/detalle/${this.props.data.id}`}>Ir a detalle</Link>
                        </p>
                        <section>
                            <button onClick={() => this.agregarFavorito()}>{isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}</button>
                        </section>
                    </article>
                </div>
            </section>
        );
    }
}

export default CardSeriesMasValoradas;
