import {Route, Switch} from 'react-router-dom/cjs/react-router-dom'

import Home from './componentes/Home/Home';

function App() {
  return (
    <Switch>
    <Route path="/" exact={true} component={Home}/>

    </Switch>
  );
}

export default App;
