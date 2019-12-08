import React from 'react';
import './App.css';
//import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
//import Default from './components/Default';
import ItemList from './components/ItemList';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Searchbar/>
      <ItemList/>
    </React.Fragment>

  );
}

export default App;