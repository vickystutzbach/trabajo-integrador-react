import React from "react";
import Header from "../../componentes/Header/Header";
import SearchResults from "../../componentes/SearchResults/SearchResults";
import Footer from "../../componentes/Footer/Footer";



function SearchR(props){
    return(
        <React.Fragment>
            <Header/>
            <SearchResults/>
            <Footer/>          
        </React.Fragment>
    )
};

export default SearchR ;