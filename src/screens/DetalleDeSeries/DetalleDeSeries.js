import React, { Component } from 'react';
import spinner from "../../img/download.gif";

class DetalleDeSerie extends Component {
    constructor (props){
        super(props);
        this.state = {
            DetalleDeSerie: {},
            isLoading: true,
            textoFav: 'Agregar a Favoritos',  
        };
    }

    componentDidMount(){ 
        const id = this.props.match.params.id; // Obtener detalles de la serie   
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=761d2122b56fefad1019c61f59cfea69`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                DetalleDeSerie: data,
                isLoading: false,
                textoFav: this.checkIfFavorito(data.id) ? 'Sacar de Favoritos' : 'Agregar a Favoritos'  
                
            });
            
        })
        .catch(error => {
            console.log(error);
            this.setState({ isLoading: false });
        });
    }

    checkIfFavorito(id) {
        const storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            return favParseados.includes(id);
        }
        return false;
    }

    agregarFav(id) {
        let storage = localStorage.getItem('fav');
        let arrayFav = [];

        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            arrayFav = favParseados.concat(id);
        } else {
            arrayFav = [id];
        }

        const arrayStringificado = JSON.stringify(arrayFav);
        localStorage.setItem('fav', arrayStringificado);
        this.setState({ textoFav: 'Sacar de Favoritos' });
    }

    sacarFav(id) {
        let storage = localStorage.getItem('fav');
        if (storage !== null) {
            const favParseados = JSON.parse(storage);
            const nuevoArrayFav = favParseados.filter(elem => elem !== id);
            const nuevoArrayString = JSON.stringify(nuevoArrayFav);
            localStorage.setItem('fav', nuevoArrayString);
            this.setState({ textoFav: 'Agregar a Favoritos' });
        }
    }

    toggleFavorito = () => {
        const { id } = this.state.DetalleDeSerie;

        if (this.state.textoFav === 'Agregar a Favoritos') {
            this.agregarFav(id);
        } else {
            this.sacarFav(id);
        }
    }

    render() {
        

        return (
            <React.Fragment>
            {this.state.isLoading ? (
                <div style={{ textAlign: "center" }}>
                    <img src={spinner} alt="Cargando..." />
                </div>
            ) : (
                <section className="detalle-container">

                    <div>
                        <h1>{DetalleDeSerie.name}</h1>
                        <img 
                            className="detalle-poster" 
                            src={`https://image.tmdb.org/t/p/w500${this.state.DetalleDeSerie.poster_path}`} 
                            alt={this.state.DetalleDeSerie.name} 
                        />

              </div>
                        <div className="detalle-info">
                   
                    
                        <p><strong>Calificación:</strong> {this.state.DetalleDeSerie.vote_average}</p>
                        <p><strong>Fecha de estreno:</strong> {this.state.DetalleDeSerie.first_air_date}</p>
                        <p><strong>Sinópsis:</strong> {this.state.DetalleDeSerie.overview}</p>
                        <p><strong>Género:</strong> 
                        <ul>
                        {this.state.DetalleDeSerie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>

                        </p>

               

                        <section  className="boton-agregar-favs">    
                            <button onClick={this.toggleFavorito}>
                                {this.state.textoFav}
                            </button>
                        </section>

                    </div>
                </section>
                
            )}
            </React.Fragment>
        );
    }
}

export default DetalleDeSerie;
