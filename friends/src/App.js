import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends List</Link>
      <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute exact path='/friends' component={FriendsList}/>
      </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
