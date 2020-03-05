import React from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Default from './components/Default';
import Landing from './components/Landing';


export const history = createHistory();

function App() {
  return (
    <Router history={history}>
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/web-dev" render={(props) => <Landing type="web-dev" {...props} />} />
      <Route exact path="/programming" render={(props) => <Landing type="programming" {...props} />}  />
      <Route exact path="/design" render={(props) => <Landing type="design" {...props} />}  />
      <Route component={Landing} />
      </Switch>
    </React.Fragment>
    </Router>
  );
}

export default App;