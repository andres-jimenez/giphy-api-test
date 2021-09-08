import config from 'redux/config';
import { getResults } from 'services/giphy';

const { SET_QUERY, RESET_QUERY, SET_RESULTS } = config.search.actions;

export const setQuery = query => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const resetQuery = () => {
  return {
    type: RESET_QUERY,
  };
};

export const setResults = query => {
  return async dispatch => {
    const results = await getResults(query);

    dispatch({
      type: SET_RESULTS,
      payload: results,
    });
  };
};
