import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'
import Home from './componentes/Home/Home';
import NotFound from './componentes/NotFound/NotFound';

function App() {
  return (
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="" component={NotFound}/>
    </Switch>
  );
}

export default App;
