import React from "react";
import Header from "../../componentes/Header/Header";
import SeriesPopulares from "../../componentes/SeriesPopulares/SeriesPopulares";
import SeriesMasValoradas from "../../componentes/SeriesMasValoradas/SeriesMasValoradas";
import Footer from "../../componentes/Footer/Footer";



function Home(){
    
    return (
        <React.Fragment>
        <div className="App">      
          <header>
        <Header/>
      </header>
      <main>
      <SeriesPopulares/>
      <SeriesMasValoradas/>
      </main>

      <Footer/>
      

    </div>
 
        </React.Fragment>
    )

}

export default Home;