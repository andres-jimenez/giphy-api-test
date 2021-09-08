import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrendingSearches } from 'redux/trending/actions';
import { StyledContainer } from './style';
import TrendingSearch from 'components/TrendingSearch';

const TrendingSearches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTrendingSearches());
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
