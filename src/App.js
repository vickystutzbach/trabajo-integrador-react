import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Home from '../src/screens/Home/Home';
import NotFound from '../src/screens/NotFound/NotFound';
import SearchResults from '../src/screens/SearchResults/SearchResults';
import VerTodoSeriesPopulares from '../src/screens/VerTodoSeriesPopulares/VerTodoSeriesPopulares';
import VerTodoSeriesMasValoradas from '../src/screens/VerTodoSeriesMasValoradas/VerTodoSeriesMasValoradas';





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
