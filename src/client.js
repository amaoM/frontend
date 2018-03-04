import React from 'react';
import { hydrate } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import VisibleIncidentListContainer from './containers/IncidentListContainer';
import VisibleIncidentDetailContainer from './containers/IncidentDetailContainer';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

hydrate(
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
