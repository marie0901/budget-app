import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Budget from './components/Budget';
import Accounts from './components/Accounts';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <img src='logo.svg' className = 'logo'/>
        <span>Budget APP</span>
        <ul className="header">





          <li><NavLink exact to="/">Budget</NavLink></li>
          <li><NavLink to="/accounts">Accounts</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path = "/" component = {Budget} />
          <Route path = "/accounts" component = {Accounts} />
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
