import React from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import Default from './components/Default';
import Landing from './components/Landing';


export const history = createHistory();

function App() {
  return (
    <Router history={history}>
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/learn/web-development" render={(props) => <Landing type="web-dev" {...props} />} />
      <Route exact path="/learn/programming-language" render={(props) => <Landing type="programming" {...props} />}  />
      <Route exact path="/learn/design" render={(props) => <Landing type="design" {...props} />}  />
      <Route component={Landing} />
      </Switch>
    </React.Fragment>
    </Router>
  );
}

export default App;