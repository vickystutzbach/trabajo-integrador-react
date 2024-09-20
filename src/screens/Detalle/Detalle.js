import React from "react";
import Header from "../../componentes/Header/Header";
import DetalleDeSeries from "../../componentes/DetalleDeSeries/DetalleDeSeries"
import Footer from "../../componentes/Footer/Footer";


function Detalle(props){
    return(
        <React.Fragment>
            <Header/>
            <DetalleDeSeries/>
            <Footer/>          
        </React.Fragment>
    )
};

export default Detalle;