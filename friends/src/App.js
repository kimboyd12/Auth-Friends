import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Login />
      <FriendsList />
    </div>
  );
}

export default App;
