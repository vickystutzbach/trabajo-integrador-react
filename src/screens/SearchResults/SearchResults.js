import React, { Component } from 'react';
import spinner from "../../img/download.gif"


class SearchResults extends Component {
  state = {
    series: [], // Inicializamos como un array vacío
    isLoading: false,
  };

  componentDidMount() {
    let query = this.props.match.params.query;

    if (query) {
      this.setState({ isLoading: true });

      // Realizamos la petición a la API con la clave de API en la URL
      fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=761d2122b56fefad1019c61f59cfea69&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            series: data.results || [], // Aseguramos que series sea un array, incluso si data.results es undefined
            isLoading: false,
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isLoading: false });
        });
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
                    series.map((serie) => (
                        <article key={serie.id} className="character-card">
                            <img src={`https://image.tmdb.org/t/p/w342${serie.backdrop_path}`} alt={serie.name} />
                            <h2>{serie.name}</h2>
                            <p className="more">
                                
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
