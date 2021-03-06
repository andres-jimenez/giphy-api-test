import config from 'redux/config';

const { SET_QUERY, RESET_QUERY, SET_RESULTS } = config.search.actions;

const initialState = { query: '', results: [] };

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case RESET_QUERY:
      return { query: '', results: [] };
    case SET_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};
