import React from "react";
import Header from "../../componentes/Header/Header";
import VerTodoSeriesMasValoradas from "../../componentes/VerTodoSeriesMasValoradas/VerTodoSeriesMasValoradas";
import Footer from "../../componentes/Footer/Footer";


function VerTodoSeriesMv(props){
    return(
        <React.Fragment>
            <Header/>
            <VerTodoSeriesMasValoradas/>
            <Footer/>          
        </React.Fragment>
    )
};

export default VerTodoSeriesMv;