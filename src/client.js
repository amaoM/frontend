import React from 'react';
import { hydrate } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import reducer from './modules/index';
import VisibleIncidentListContainer from './containers/IncidentListContainer';
import VisibleIncidentDetailContainer from './containers/IncidentDetailContainer';

const logger = createLogger({
  collapsed: true,
});
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducer);

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
