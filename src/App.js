import React from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import Default from './components/Default';
import Landing from './components/Landing';
import Learn from './components/Learn';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/learn" component={Learn} />
    </React.Fragment>
    </Router>
  );
}

export default App;