import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Home(){
    return (
        <React.Fragment>
        <div className="App">      
      <header className="App-header">
        <Header/>
      </header>


      <footer>
        <Footer/> 
        </footer>        



    </div>
 
        </React.Fragment>
    )

}

export default Home;