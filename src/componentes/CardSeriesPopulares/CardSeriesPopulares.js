import React, {Component} from "react";


class CardSeriesPopulares extends Component {
    constructor(props){
        super(props);
    };
    render(){
	    return(
            <section className='cardContainer'>
                <div>
                    <article className='character-card'>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.data.backdrop_path}`} />
                        <h2>{this.props.data.name} </h2>
                        <p>{this.props.data.overview}</p>
                   
                       
                    </article>
                </div>
            </section>
            )
        }

}  

export default CardSeriesPopulares;