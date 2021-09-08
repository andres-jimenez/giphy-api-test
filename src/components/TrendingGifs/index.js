import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingGifs } from 'redux/trending/actions';
import { fetchData } from 'helpers/fetchData';
import { GIPHY_API_KEY } from 'App';
import Gif from 'components/Gif';

const TrendingGifs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(
      `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=10`,
      setTrendingGifs,
      dispatch
    );
  }, [dispatch]);

  const trendingGifs = useSelector(state => state.trending.gifs);
  console.log(trendingGifs);

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
