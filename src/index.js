import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux'
import './index.css';
import { Router, browserHistory } from 'react-router'
import routes from './config/routes.js'
import reducers from './reducers'
import {getRandomNumbers} from './actions'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

store.dispatch(getRandomNumbers(2, 100))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);
