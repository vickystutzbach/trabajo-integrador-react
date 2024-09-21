import React, {Component} from "react";
import { Link } from 'react-router-dom';

class CardSeriesPopulares extends Component {
    constructor(props){
        super(props);
        this.state = {
            verMas:false,
            textoFav: "Agregar a favoritos",
            esFav: false
        }
            
    };
    componentDidMount(){
        let seriesP = localStorage.getItem("fav")
        if(seriesP !== null){
            let favParseados = JSON.parse(seriesP)
            let estaEnFav = favParseados.includes(this.props.data.id)
            if(estaEnFav){
                this.setState({
                    textoFav: "Sacar de favoritos",
                    esFav: true
                })
            }
        }
    }

    alternarVisibilidad(){
        this.setState({verMas: !this.state.verMas})
    }

    agregarFav(id){
        let seriesP = localStorage.getItem("fav")
        if(seriesP !== null){
            let favParseados = JSON.parse(seriesP)
            favParseados.push(id)
            let favStringificado = JSON.stringify(favParseados)
            localStorage.setItem("fav", favStringificado)
        } else {
            let arrayFav = [id]
            let arrayStringificado = JSON.stringify(arrayFav)
            localStorage.setItem("fav", arrayStringificado)
        }
        this.setState({
            textoFav: "Sacar de favoritos",
            esFav: true
        })
    }

    sacarFav(id){
        let seriesP = localStorage.getItem("fav")
        let favParseados = JSON.parse(seriesP)
        let nuevoArrayFav = favParseados.filter(elem => elem !== id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem("fav",nuevoArrayString)
        this.setState({
            textoFav: "Agregar a favoritos",
            esFav: false
        })
    }

    render(){
	    return(
            <section className='cards-container'>
                <div>
                    <article className='character-card'>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.data.backdrop_path}`} />
                        <h2>{this.props.data.name} </h2>

                       
                        <p className='more' onClick={()=>this.alternarVisibilidad()} >Ver descripcion</p> 
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
            )
        }

}  

export default CardSeriesPopulares;