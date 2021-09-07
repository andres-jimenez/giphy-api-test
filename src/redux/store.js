import { combineReducers, createStore } from 'redux';
import { trending } from 'redux/trending/reducer';
import { search } from 'redux/search/reducer';

const reducers = combineReducers({ trending, search });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
