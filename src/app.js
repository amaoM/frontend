import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Runway from './components/Runway';
import reducer from './reducers/index';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Runway />
  </Provider>,
  document.getElementById('root'),
);
