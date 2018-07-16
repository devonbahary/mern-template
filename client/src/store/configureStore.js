import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import samplesReducer from '../reducers/samples';

export default () => createStore(
  samplesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
