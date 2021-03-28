import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import React, { useState, useEffect} from "react"
import { AuthProvider } from "./context/AuthContext/AuthContext"

import CardDisplay from './components/CardDisplay';

function App() {

  
   

  
 


  return (

    <AuthProvider>

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
        <Route path = "/signup">
          <SignUp />
        </Route>

      </Switch>
    
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
