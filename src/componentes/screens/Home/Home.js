import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SeriesPopulares from "../../SeriesPopulares/SeriesPopulares";
import SeriesMasValoradas from "../../SeriesMasValoradas/SeriesMasValoradas";



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

      



    </div>
 
        </React.Fragment>
    )

}

export default Home;