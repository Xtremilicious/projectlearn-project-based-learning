import React from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import Default from './components/Default';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/learn/web-development" render={(props) => <Landing type="web-dev" {...props} />} />
      <Route exact path="/learn/programming-language" render={(props) => <Landing type="programming" {...props} />}  />
      <Route exact path="/learn/design" render={(props) => <Landing type="design" {...props} />}  />
      <Route component={Landing} />
    </React.Fragment>
    </Router>
  );
}

export default App;