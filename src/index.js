import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import routes from './config/routes.js'
import reducers from './reducers'
import {getRandomNumbers} from './actions'
import './index.css'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
)

store.dispatch(getRandomNumbers(2, 100))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);
