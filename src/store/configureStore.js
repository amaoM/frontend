import { applyMiddleware, createStore } from 'redux';
import reducer from '../modules/index';
import createLoggerMiddleware from '../middlewares/logger';
import sampleMiddleware from '../middlewares/sample';

const middlewares = [createLoggerMiddleware, sampleMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const configureStore = () => createStoreWithMiddleware(reducer);

export default configureStore;
