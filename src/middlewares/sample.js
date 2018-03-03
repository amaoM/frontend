const sampleMiddleware = () => next => action => {
  console.log(new Date().getTime());
  console.log(action.type);
  next(action);
};

export default sampleMiddleware;
