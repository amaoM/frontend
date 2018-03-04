const sampleMiddleware = store => next => action => {
  console.log('next state', store.getState());
  console.log('dispatch', store.dispatch);
  const result = next(action);
};

export default sampleMiddleware;
