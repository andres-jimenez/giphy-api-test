import config from 'redux/config';

const { SET_TRENDING_GIFS } = config.giphy.actions;

export const setTrendingGifs = trendingGifs => {
  return {
    type: SET_TRENDING_GIFS,
    payload: trendingGifs,
  };
};
