import React, { Component } from "react";
import { Link } from "react-router-dom"; // Para permitir la navegación al detalle de la serie
import spinner from "../../img/download.gif"

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritos: [],
            isLoading: true, 
        };
    }

    componentDidMount() {
        this.cargarFavoritos(); // obtiene las series favs desde localstorage
    }

    cargarFavoritos() {
        const storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage); //a los favs guardados los convierte en un array
            Promise.all(favParseados.map(id =>
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=761d2122b56fefad1019c61f59cfea69`)
                .then(response => response.json())
            )).then(data => {
                this.setState({ 
                    favoritos: data,
                    isLoading: false
                });
            }).catch(error => {
                console.error('Error fetching series:', error);
                this.setState({ isLoading: false }); // En caso de error, deja de cargar
            });
        } else {
            this.setState({ isLoading: false }); // No hay favoritos, también deja de cargar
        }
    }

    eliminarDeFavoritos(id) {
        let storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            const nuevoArrayFav = favParseados.filter(elem => elem !== id);
            localStorage.setItem('fav', JSON.stringify(nuevoArrayFav));
            this.cargarFavoritos(); 
        }
    }

    render() {
        const { favoritos, isLoading } = this.state;

        return (
            <React.Fragment>
                <h1>Mis Series Favoritas</h1>
                {isLoading ? (
                    <div style={{ textAlign: "center" }}>
                        <img src={spinner} alt="Cargando..." />
                    </div>
                ) : (
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
                                    <section  className="boton-agregar-favs-pag">
                                    <button onClick={() => this.eliminarDeFavoritos(serie.id)}>
                                        Eliminar de Favoritos
                                    </button>
                                    </section>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default Favoritos;
