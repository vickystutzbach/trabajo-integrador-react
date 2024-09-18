import React, { Component } from "react";


class DetalleDeSerie extends Component {
    constructor (){
        super();
        this.state = {
            DetalleDeSerie: [],
            isLoading: true
    }
}
componentDidMount(){ 
    fetch(`https://api.themoviedb.org/3/tv/${ this.props.match.params.id}?api_key=761d2122b56fefad1019c61f59cfea69`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            DetalleDeSerie: data,
            isLoading: false
        })
    })
    .catch(error => {
        console.error(error);
        this.setState({isLoading: false});
    })
}


render (){
    console.log(this.state.DetalleDeSerie)
    return(
           
        <React.Fragment>
             {this.state.DetalleDeSerie.isLoading ? 'Cargando' : 
             <React.Fragment>
            <h1>{this.state.DetalleDeSerie.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.DetalleDeSerie.poster_path}`} alt={this.state.DetalleDeSerie.name} />
            <p><strong>Calificación:</strong> {this.state.DetalleDeSerie.vote_average}</p>
            <p><strong>Fecha de estreno:</strong> {this.state.DetalleDeSerie.first_air_date}</p>
            <p><strong>Sinópsis:</strong> {this.state.DetalleDeSerie.overview}</p>
            <p><strong>Género:</strong> {this.state.DetalleDeSerie.genres.map(genre => <p>{genre.name}</p>)}</p>
            <button onClick={this.state.DetalleDeSerie.agregarAFavoritos}>
            {this.state.DetalleDeSerie.isFavorito ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            </button>
            </React.Fragment>
            }
        </React.Fragment>
)
}


}

export default DetalleDeSerie;