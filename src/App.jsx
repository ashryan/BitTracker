import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Login from "./components/Login"

import React, { useState, useEffect} from "react"

import CardDisplay from './components/CardDisplay';

function App() {

  
   

  
 


  return (


    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" >
          <CardDisplay />
        </Route>
        <Route exact path ="/portfolio">
          <Portfolio />
        </Route>
        <Route path ="/login">
          <Login />

        </Route>

      </Switch>
    
      </div>
    </Router>
  );
}

export default App;
