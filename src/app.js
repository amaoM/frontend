import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './reducers/index';
import Runway from './components/Runway';
import VisibleIncidentDetailContainer from './containers/IncidentDetailContainer';


const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Runway} />
      <Route path="/detail/:id" component={VisibleIncidentDetailContainer} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
