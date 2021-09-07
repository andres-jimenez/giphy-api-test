import config from 'redux/config';

const { SET_QUERY, SET_RESULTS } = config.search.actions;

export const setQuery = query => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const setResults = results => {
  return {
    type: SET_RESULTS,
    payload: results,
  };
};
