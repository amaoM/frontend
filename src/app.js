import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './modules/index';
import VisibleIncidentListContainer from './containers/IncidentListContainer';
import VisibleIncidentDetailContainer from './containers/IncidentDetailContainer';

const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <main className="container">
      <Router history={history}>
        <Route path="/" component={VisibleIncidentListContainer} />
        <Route path="/detail/:id" component={VisibleIncidentDetailContainer} />
      </Router>
    </main>
  </Provider>,
  document.getElementById('root')
);
