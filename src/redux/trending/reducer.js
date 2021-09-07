import config from 'redux/config';

const { SET_TRENDING_GIFS } = config.trending.actions;

const initialState = { gifs: [] };

export const trending = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDING_GIFS:
      return { ...state, gifs: action.payload };
    default:
      return state;
  }
};
