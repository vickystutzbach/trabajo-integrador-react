import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SeriesPopulares from "../../SeriesPopulares/SeriesPopulares";



function Home(){
    return (
        <React.Fragment>
        <div className="App">      
      <header className="App-header">
        <Header/>
      </header>

      <h2>Series Populares</h2>
      



      <footer>
        <Footer/> 
        </footer>        



    </div>
 
        </React.Fragment>
    )

}

export default Home;