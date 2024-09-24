import React from "react";
import SeriesPopulares from "../../componentes/SeriesPopulares/SeriesPopulares";
import SeriesMasValoradas from "../../componentes/SeriesMasValoradas/SeriesMasValoradas";



function Home(){
    
    return (
        <React.Fragment>
        <div className="App">      
      <main>
      <SeriesPopulares/>
      <SeriesMasValoradas/>
      </main>      
    </div>
        </React.Fragment>
    )

}

export default Home;