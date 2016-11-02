require("./style.scss");
require('bootstrap');

import React from 'react';
import ReactDOM from "react-dom";
import {reducer} from './app/counterReducer';
import userReducer, {userEpic} from './app/userReducer';

import App from './app/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

const rootEpic = combineEpics(userEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = combineReducers({counter: reducer, user: userReducer})

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);