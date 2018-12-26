

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store';
import { startSetAccounts } from './actions/accountActions';


import LoadingPage from './components/LoadingPage';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));


    // store.dispatch(startSetAccounts()).then(() => {
    //   renderApp();
    //   // if (history.location.pathname === '/') {
    //   //   history.push('/budgets');
    //   // }
    // });

    store.dispatch(startSetAccounts())
      renderApp();
// //////////////////////////////////






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
