import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BuscarHeader from "../BuscarHeader/BuscarHeader";

class Header extends Component {
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
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/favoritos" className="nav-link">Favoritos</Link></li>
                    
                    <li className="ver-todo-container">
                        <p className='ver-todo-button'  onClick={this.alternarVisibilidad}>Ver Todo </p>
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

export default Header;

