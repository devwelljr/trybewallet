import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/trybewallet/carteira" component={ Wallet } />
      <Route exact path="/trybewallet" component={ Login } />
    </Switch>
  );
}

export default App;
