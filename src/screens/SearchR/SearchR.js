import React from "react";
import Header from "../../componentes/Header/Header";
import SearchResults from "../../componentes/SearchResults/SearchResults";
import Footer from "../../componentes/Footer/Footer";



function SearchR(props){
    const { query } = props.match.params.query;
    console.log(props);
    
    return(
        <React.Fragment>
            <Header/>
            <SearchResults query ={query}/>
            <Footer/>          
        </React.Fragment>
    )
};

export default SearchR ;