import config from 'redux/config';

const { SET_TRENDING_GIFS, SET_TRENDING_SEARCHES } = config.trending.actions;

export const setTrendingGifs = trendingGifs => {
  return {
    type: SET_TRENDING_GIFS,
    payload: trendingGifs,
  };
};

export const setTrendingSearches = trendingSearches => {
  return {
    type: SET_TRENDING_SEARCHES,
    payload: trendingSearches,
  };
};
