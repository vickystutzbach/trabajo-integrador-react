import React from "react";
import Header from "../../componentes/Header/Header";
import SeriesPopulares from "../../componentes/SeriesPopulares/SeriesPopulares";
import SeriesMasValoradas from "../../componentes/SeriesMasValoradas/SeriesMasValoradas";



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