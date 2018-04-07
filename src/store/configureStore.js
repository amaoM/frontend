import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../modules/index';
import createLoggerMiddleware from '../middlewares/logger';

const middlewares = [createLoggerMiddleware];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const configureStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default configureStore;
