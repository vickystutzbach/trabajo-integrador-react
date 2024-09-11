import React, {Component} from "react";


class CardSeriesPopulares extends Component {
    constructor(props){
        super(props);
    };
    render(){
	    return(
	    <div>
             <section className='cardContainer'>
            <h2> {this.props.data.name}</h2> 


             </section>

        </div>
        )
    }
    }

export default CardSeriesPopulares;