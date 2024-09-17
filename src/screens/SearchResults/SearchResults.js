import React, { Component } from 'react';

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
          <p>Cargando resultados...</p>
        ) : (
          <div className="cards-container">
            {series && series.length > 0 ? ( 
              series.map((serie) => (
                <div key={serie.id} className="result-item">
                  <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} alt={serie.name}/>
                  <h3>{serie.name}</h3>
                </div>))
            ) : (
              <p>No se encontraron resultados para "{query}".</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
