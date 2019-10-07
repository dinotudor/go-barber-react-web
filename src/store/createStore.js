import { createStore } from 'redux';

export default (reducers, middlewares) => {
  return createStore(reducers, middlewares);
};
