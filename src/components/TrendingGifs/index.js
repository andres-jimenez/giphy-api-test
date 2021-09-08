import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingGifs } from 'redux/trending/actions';
import Gif from 'components/Gif';

const TrendingGifs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrendingGifs());
  }, [dispatch]);

  const trendingGifs = useSelector(state => state.trending.gifs);

  return (
    <>
      <h3>Trending Gifs</h3>
      {trendingGifs.map(gif => (
        <Gif key={gif.id} src={gif.images.preview_gif.url} alt={gif.title} />
      ))}
    </>
  );
};

export default TrendingGifs;
