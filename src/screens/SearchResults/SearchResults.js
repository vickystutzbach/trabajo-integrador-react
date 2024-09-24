import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import spinner from "../../img/download.gif";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [], 
      isLoading: false,
    };
  }

  componentDidMount() {
    let query = this.props.query;
    console.log(query);
    

    if (query) {
      this.setState({ isLoading: true });

      fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
          const seriesConVisibilidad = data.results.map(serie => ({ ...serie, verMas: false }));
          this.setState({
            series: seriesConVisibilidad,
            isLoading: false,
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
    }
  }

  alternarVisibilidad(index) {
    const { series } = this.state;
    if (index >= 0 && index < series.length) {
      series[index].verMas = !series[index].verMas;
      this.setState({ series });
    }
  }

  render() {
    let { series, isLoading } = this.state;
    let query = this.props.match.params.query;

    return (
      <div>
        <h1>Resultados de búsqueda para: "{query}"</h1>
        {isLoading ? (
          <div className="loading-container">
            <img src={spinner} alt="Cargando..." />
          </div>
        ) : (
          <section className="cards-container">
            {series && series.length > 0 ? (
              series.map((serie, index) => (
                <article key={serie.id} className="character-card">
                  <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={serie.name} />
                  <h2>{serie.name}</h2>
                  <p className='more' onClick={() => this.alternarVisibilidad(index)}>
                    {serie.verMas ? 'Ocultar descripción' : 'Ver descripción'}
                  </p>
                  {serie.verMas && (
                    <section className="extra show">
                      <p>{serie.overview}</p>
                    </section>
                  )}
                  <p className="more">
                    <Link to={`/detalle/${serie.id}`}>Ir a detalle</Link>
                  </p>
                </article>
              ))
            ) : (
              <p>No se encontraron resultados para "{query}".</p>
            )}
          </section>
        )}
      </div>
    );
  }
}

export default SearchResults;
