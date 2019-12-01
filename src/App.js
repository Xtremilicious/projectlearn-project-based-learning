import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import ItemList from './components/ItemList';
import Details from './components/Details';
import Intro from './components/Intro';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Intro/>
      <Searchbar/>
      <Switch>
      <Route exact path='/' component={ItemList}></Route>
        <Route path='/details' component={Details}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;