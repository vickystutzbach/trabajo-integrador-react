import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import DetalleDeSeries from './screens/DetalleDeSeries/DetalleDeSeries';
import Favoritos from './screens/Favoritos/Favoritos';
import Home from './screens/Home/Home';
import Header from './componentes/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import Footer from './componentes/Footer/Footer';
import SearchResults from './screens/SearchResults/SearchResults'
import VerTodoSeriesMasValoradas from './screens/VerTodoSeriesMasValoradas/VerTodoSeriesMasValoradas';
import VerTodoSeriesPopulares from './screens/VerTodoSeriesPopulares/VerTodoSeriesPopulares';
import "./App.css"




function App() {
  return (
    <div className="App">

     <Header/>   
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/search/:query" component={SearchResults} />
    <Route path="/ver-todo-series-populares" component={VerTodoSeriesPopulares} />
    <Route path="/ver-todo-series-mas-valoradas" component={VerTodoSeriesMasValoradas} />
    <Route path= "/detalle/:id" component= {DetalleDeSeries}/>
    <Route path="/favoritos" component={Favoritos} />
    <Route path="/" component={NotFound}/>
 
    </Switch>   
    <Footer/>


    </div>

  );
}

export default App;
