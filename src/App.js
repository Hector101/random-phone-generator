import * as React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from './routes';
import RoutesComponent from './routes/RoutesComponent';

const history = createBrowserHistory();


function App() {
  return(
    <div className="w-100 h-100">
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <RoutesComponent key={i} {...route} />
          ))}
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
