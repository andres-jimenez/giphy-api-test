import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/search/actions';
import { StyledTrendingSearch } from './style';

const TrendingSearch = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <StyledTrendingSearch onClick={() => dispatch(setQuery(text))}>
      {text}
    </StyledTrendingSearch>
  );
};

export default TrendingSearch;
