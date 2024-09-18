import React, { Component } from "react";
import { Link } from "react-router-dom"; // Para permitir la navegación al detalle de la serie

class Favoritos extends Component {
    constructor() {
        super();
        this.state = {
            favoritos: [],
        };
    }

    componentDidMount() {
        this.cargarFavoritos();
    }

    cargarFavoritos() {
        const storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            Promise.all(favParseados.map(id =>
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=761d2122b56fefad1019c61f59cfea69`)
                .then(response => response.json())
            )).then(data => {
                this.setState({ favoritos: data });
            }).catch(error => console.error('Error fetching series:', error));
        }
    }

    eliminarDeFavoritos(id) {
        let storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            const nuevoArrayFav = favParseados.filter(elem => elem !== id);
            localStorage.setItem('fav', JSON.stringify(nuevoArrayFav));
            this.cargarFavoritos(); // Recarga la lista actualizada
        }
    }

    render() {
        const { favoritos } = this.state;

        return (
            <React.Fragment>
                <h1>Mis Series Favoritas</h1>
                <div className="favoritos-lista">
                    {favoritos.length === 0 ? (
                        <p>No tienes series en favoritos.</p>
                    ) : (
                        favoritos.map(serie => (
                            <div key={serie.id} className="favorito-item">
                                <Link to={`/detalle/${serie.id}`}>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} 
                                        alt={serie.name} 
                                    />
                                    <h3>{serie.name}</h3>
                                </Link>
                                <button onClick={() => this.eliminarDeFavoritos(serie.id)}>
                                    Eliminar de Favoritos
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Favoritos;
