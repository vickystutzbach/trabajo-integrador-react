import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Home from './componentes/screens/Home/Home';
import NotFound from './componentes/NotFound/NotFound';
import SearchResults from './componentes/SearchResults/SearchResults';
import VerTodoSeriesPopulares from './componentes/screens/VerTodoSeriesPopulares/VerTodoSeriesPopulares';
import VerTodoSeriesMasValoradas from './componentes/screens/VerTodoSeriesMasValoradas/VerTodoSeriesMasValoradas';





function App() {
  return (
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/search/:query" component={SearchResults} />
    <Route path="/ver-todo-series-populares" component={VerTodoSeriesPopulares} />
    <Route path="/ver-todo-series-mas-valoradas" component={VerTodoSeriesMasValoradas} />
    <Route path="/" component={NotFound}/>

    </Switch>
  );
}

export default App;
