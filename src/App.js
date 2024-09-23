import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Detalle from './screens/Detalle/Detalle';
import Favoritos from './screens/Favs/Favs'
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import SearchR from './screens/SearchR/SearchR';
import VerTodoSeriesMv from './screens/VerTodoSeriesMv/VerTodoSeriesMv';
import VerTodoSeriesP from './screens/VerTodoSeriesP/VerTodoSeriesP';
import SearchResults from './componentes/SearchResults/SearchResults';
import "./App.css"



function App() {
  return (
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/search/:query" component={SearchR} />
    <Route path="/ver-todo-series-populares" component={VerTodoSeriesP} />
    <Route path="/ver-todo-series-mas-valoradas" component={VerTodoSeriesMv} />
    <Route path= "/detalle/:id" component= {Detalle}/>
    <Route path="/favoritos" component={Favoritos} />
    <Route path="/" component={NotFound}/>
    </Switch>
  );
}

export default App;
