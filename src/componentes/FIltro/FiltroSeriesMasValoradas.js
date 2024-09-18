import React, {Component} from "react";

class FiltroSeriesMasValoradas extends Component{
    constructor(){
        super();
        this.state = {
            valorInput: ""
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    controladorDeCambios(event){
        this.setState({
            valorInput: event.target.value
        },
        ()=> this.props.filtrarSeriesMasValoradas(this.state.valorInput)
        )
    }



    render(){
        return(
            <form className="filtro" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input className="filtrar" type="text" placeholder="Escribir serie" 
                onChange={(event)=>this.controladorDeCambios(event)} value={this.state.valorInput}/>
            </form>
        )
    }
}

export default FiltroSeriesMasValoradas;