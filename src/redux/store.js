import { combineReducers, createStore } from 'redux';
import { giphy } from 'redux/giphy/reducer';

const reducers = combineReducers({ giphy });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
