import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardSeriesMasValoradas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: props.data,
            verMas: false,
            textoFav: "Agregar a favoritos",
            esFav: false

        };
    }
    componentDidMount(){
        let seriesMv = localStorage.getItem("fav")
        if(seriesMv !== null){
            let favParseados = JSON.parse(seriesMv)
            let estaEnFav = favParseados.includes(this.props.data.id)
            if(estaEnFav){
                this.setState({
                    textoFav: "sacar de favoritos",
                    esFav: true
                })
            }
        }
    }

    alternarVisibilidad() {
        this.setState({ verMas: !this.state.verMas });
    }
    
    agregarFav(id){
        let seriesMv = localStorage.getItem("fav")
        if(seriesMv !== null){
            let favParseados = JSON.parse(seriesMv)
            favParseados.push(id)
            let favStringificado = JSON.stringify(favParseados)
            localStorage.setItem("fav", favStringificado)
        } else {
            let arrayFav = [id]
            let arrayStringificado = JSON.stringify(arrayFav)
            localStorage.setItem("fav", arrayStringificado)
        }
        this.setState({
            textoFav: "sacar de favoritos",
            esFav: true
        })
    }

    sacarFav(id){
        let seriesMv = localStorage.getItem("fav")
        let favParseados = JSON.parse(seriesMv)
        let nuevoArrayFav = favParseados.filter(elem => elem !== id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem("fav",nuevoArrayString)
        this.setState({
            textoFav: "agregar a favoritos",
            esFav: false
        })
    }

    render() {
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
                        <section  className="boton-agregar-favs">
                        <button onClick={this.state.esFav ? ()=>this.sacarFav(this.props.data.id) : ()=>this.agregarFav(this.props.data.id)}>{this.state.textoFav}</button>
                        </section>
                    </article>
                </div>
            </section>
        );
    }
}

export default CardSeriesMasValoradas;
