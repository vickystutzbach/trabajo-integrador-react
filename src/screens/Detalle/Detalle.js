import React from "react";
import Header from "../../componentes/Header/Header";
import DetalleDeSeries from "../../componentes/DetalleDeSeries/DetalleDeSeries"
import Footer from "../../componentes/Footer/Footer";


function Detalle(props){
    const { id } = props.match.params;
    console.log(props);
    
    return(
        <React.Fragment>
            <Header/>
            <DetalleDeSeries id= {id}/>
            <Footer/>          
        </React.Fragment>
    )
};

export default Detalle;