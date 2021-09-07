import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingGifs } from 'redux/trending/actions';
import { useFetch } from 'hooks/useFetch';
import { GIPHY_API_KEY } from 'constants/index';
import Gif from 'components/Gif';

const TrendingGifs = () => {
  const { data, pending } = useFetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10`
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pending) dispatch(setTrendingGifs(data));
  }, [dispatch, data, pending]);

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
