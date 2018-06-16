import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux/es';
import { createStore, applyMiddleware } from 'redux/es';
import promise from 'redux-promise';
import reducers from './reducers';

import Router from './router';

import '../style/style.css';
import './components/test.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router />
  </Provider>,
  document.querySelector('.container'),
);
