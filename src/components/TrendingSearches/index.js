import { GIPHY_API_KEY } from 'App';
import { fetchData } from 'helpers/fetchData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingSearches } from 'redux/trending/actions';
import { StyledContainer } from './style';
import TrendingSearch from 'components/TrendingSearch';

const TrendingSearches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(
      `https://api.giphy.com/v1/trending/searches?api_key=${GIPHY_API_KEY}`,
      setTrendingSearches,
      dispatch
    );
  }, [dispatch]);

  const trendingSearches = useSelector(state => state.trending.searches);

  return (
    <>
      <h4>Most popular searches today:</h4>
      <StyledContainer>
        {trendingSearches.map(search => (
          <TrendingSearch key={search} text={search} />
        ))}
      </StyledContainer>
    </>
  );
};

export default TrendingSearches;
