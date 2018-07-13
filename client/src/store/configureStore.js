import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from '../reducers/items';

export default () => createStore(
  itemsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
