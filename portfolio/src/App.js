import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
