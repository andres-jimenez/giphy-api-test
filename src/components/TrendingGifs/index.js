import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingGifs } from 'redux/trending/actions';
import Gif from 'components/Gif';
import { StyledH3, StyledContainer } from './style';

const TrendingGifs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrendingGifs());
  }, [dispatch]);

  const trendingGifs = useSelector(state => state.trending.gifs);

  return (
    <>
      <StyledH3>Trending Gifs</StyledH3>
      <StyledContainer>
        {trendingGifs.map(gif => (
          <Gif key={gif.id} src={gif.images.preview_gif.url} alt={gif.title} />
        ))}
      </StyledContainer>
    </>
  );
};

export default TrendingGifs;
