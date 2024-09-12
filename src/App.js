import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Home from './componentes/screens/Home/Home';
import NotFound from './componentes/NotFound/NotFound';
import SearchResults from './componentes/SearchResults/SearchResults';

function App() {
  return (
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/search/:query" component={SearchResults} />
    <Route path="" component={NotFound}/>
    </Switch>
  );
}

export default App;
