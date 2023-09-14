import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'
import Cards from './components/Cards';
import GetStarted from './components/GetStarted';
import Generator from './components/Generator';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Cards' component={Cards} />
        <Route path='/GetStarted'component={GetStarted} />
        <Route path='/Generator' component={Generator} />
      </Switch>
    </Router>
    </>
  );
}

export default App;