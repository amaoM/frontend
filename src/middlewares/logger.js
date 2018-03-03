import { createLogger } from 'redux-logger';

const createLoggerMiddleware = createLogger({
  collapsed: true,
});

export default createLoggerMiddleware;
