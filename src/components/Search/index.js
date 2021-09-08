import Gif from 'components/Gif';
import SearchBar from 'components/Search/SearchBar';
import TrendingSearches from 'components/Search/TrendingSearches';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from 'redux/search/actions';
import { SearchResults } from './style';

const Search = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector(state => state.search.query);

  useEffect(() => {
    if (searchQuery) {
      dispatch(setResults(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const searchResults = useSelector(state => state.search.results);

  return (
    <>
      <SearchBar />
      <SearchResults>
        {searchResults.map(gif => (
          <Gif key={gif.id} src={gif.images.preview_gif.url} alt={gif.title} />
        ))}
      </SearchResults>
      <TrendingSearches />
    </>
  );
};

export default Search;
