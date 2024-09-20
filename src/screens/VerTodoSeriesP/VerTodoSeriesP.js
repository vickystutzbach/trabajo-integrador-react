import React from "react";
import Header from "../../componentes/Header/Header";
import VerTodoSeriesPopulares from "../../componentes/VerTodoSeriesPopulares/VerTodoSeriesPopulares";
import Footer from "../../componentes/Footer/Footer";



function VerTodoSeriesP(props){
    return(
        <React.Fragment>
            <Header/>
            <VerTodoSeriesPopulares/>
            <Footer/>          
        </React.Fragment>
    )
};

export default VerTodoSeriesP;