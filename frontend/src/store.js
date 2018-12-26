import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import accountReducer from './reducers/accountReducer';
import filterReducer from './reducers/filterReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      accounts: accountReducer,
      filter: filterReducer,

    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
