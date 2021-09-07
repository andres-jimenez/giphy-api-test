import config from 'redux/config';

const { SET_TRENDING_GIFS } = config.giphy.actions;

const initialState = { trendingGifs: [] };

export const giphy = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_GIFS:
      return { ...state, trendingGifs: action.payload };
    default:
      return state;
  }
};
