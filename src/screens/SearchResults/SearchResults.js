import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spinner from "../../img/download.gif";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [], 
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=761d2122b56fefad1019c61f59cfea69&query=${this.props.match.params.busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          series: data.results,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <img src={spinner} alt="Cargando..."/>
        ) : (
        <section className="mostrarFavs">
          {this.state.series.length > 0 ? (
            this.state.series.map((serie) => (
              <article key={serie.id} className="character-card">
                <img 
                  src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} 
                  alt={serie.name} 
                />
                <h2>{serie.name}</h2>
                <p className="more">
                  <Link to={`/detalle/${serie.id}`}>Ir a detalle</Link>
                </p>
              </article>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </section>

        )}
      </div>
    );
  }
}

export default SearchResults;

