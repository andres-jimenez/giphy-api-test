import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { trending } from 'redux/trending/reducer';
import { search } from 'redux/search/reducer';

const reducers = combineReducers({ trending, search });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
