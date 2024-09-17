import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuscarHeader from "../BuscarHeader/BuscarHeader";

class ListaDeHeader extends Component {
    constructor() {
        super();
        this.state = {
            mostrarOpciones: false
        };
    }

    alternarVisibilidad = () => {
        this.setState({ mostrarOpciones: !this.state.mostrarOpciones });
    };
    render() {
        return (
            <nav>
                <ul className="main-nav">
                    <li><Link to="/" className="nav-link">{this.props.home}</Link></li>
                    <li><Link to="/favoritos" className="nav-link">{this.props.favoritos}</Link></li>
                    
                    <li className="ver-todo-container">
                        <p className='ver-todo-button'  onClick={this.alternarVisibilidad}>
                            {this.props.vertodo}
                        </p>
                        <section className={'ver-todo-options ' + (this.state.mostrarOpciones ? "show" : "hide")}>
                            <ul>
                                <li><Link to="/ver-todo-series-populares">Series Populares</Link></li>
                                <li><Link to="/ver-todo-series-mas-valoradas">Series Más Valoradas</Link></li>
                            </ul>
                        </section>
                    </li>
                </ul>
                
                <BuscarHeader />

                <ul className="logo">
                    <img src="./img/logo2.png" alt="Logo" className="logo-image" />
                </ul>
            </nav>
        );
    }
    }

export default ListaDeHeader;

