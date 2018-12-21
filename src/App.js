import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Budget from './components/Budget';
import AccountsContainer from './components/AccountsContainer';
import 'typeface-roboto';


const store = configureStore();


class App extends Component {
  render() {
    return (
  <Provider store={store}>
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
          <Route path = "/accounts" component = {AccountsContainer} />
        </div>
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
