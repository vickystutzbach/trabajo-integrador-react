import React, {Component} from "react";
import {Link} from "react-router-dom";

class CardSeriesMasValoradas extends Component {
    constructor(props){
        super(props);
        this.state = {
            verMas:false,
            favorito: false
        }
            
    };
    alternarVisibilidad(){
        this.setState({verMas: !this.state.verMas})
    }
    esFavorito(){
        this.setState({favorito: !this.state.favorito})
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
                        <section>
                        <p className='more' onClick={()=>this.esFavorito()} >Agregar a favoritos</p> 
                        </section>
                       
                    </article>
                </div>
            </section>
            )
        }

}  

export default CardSeriesMasValoradas;