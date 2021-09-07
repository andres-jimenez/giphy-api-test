import config from 'redux/config';

const { SET_TRENDING_GIFS, SET_TRENDING_SEARCHES } = config.trending.actions;

const initialState = { gifs: [], searches: [] };

export const trending = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_GIFS:
      return { ...state, gifs: action.payload };
    case SET_TRENDING_SEARCHES:
      return { ...state, searches: action.payload };
    default:
      return state;
  }
};
