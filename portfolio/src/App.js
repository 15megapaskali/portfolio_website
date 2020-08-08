import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register'
import {HashRouter,Route,Link,Switch,NavLink} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
