import config from 'redux/config';
import { getTrendingGifs, getTrendingSearches } from 'services/giphy';

const { SET_TRENDING_GIFS, SET_TRENDING_SEARCHES } = config.trending.actions;

export const setTrendingGifs = () => {
  return async dispatch => {
    const trendingGifs = await getTrendingGifs();

    dispatch({
      type: SET_TRENDING_GIFS,
      payload: trendingGifs,
    });
  };
};

export const setTrendingSearches = () => {
  return async dispatch => {
    const trendingSearches = await getTrendingSearches();

    dispatch({
      type: SET_TRENDING_SEARCHES,
      payload: trendingSearches,
    });
  };
};
