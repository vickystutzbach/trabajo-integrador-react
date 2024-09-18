import React, {Component} from "react";
import { Link } from 'react-router-dom';

class BuscarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }
    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({query: event.target.value })
    }

    render(){
        return (
            <form className="busqueda" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input className="busqueda-input"  type="text" placeholder="Buscar series..." value={this.state.query} onChange={(event)=>this.controlarCambios(event)}/>
                <Link className="busqueda-boton" to={`/search/${this.state.query}`}>Buscar</Link>
            </form>

            );
           
        
    }
    

   
}

export default BuscarHeader;