import React from "react";
import Header from "../../componentes/Header/Header";
import Favoritos from "../../componentes/Favoritos/Favoritos";
import Footer from "../../componentes/Footer/Footer";



function Favs(props){
    return(
        <React.Fragment>
            <Header/>
            <Favoritos/>
            <Footer/>          
        </React.Fragment>
    )
};

export default Favs;