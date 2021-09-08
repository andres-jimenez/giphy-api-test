import Gif from 'components/Gif';
import SearchBar from 'components/SearchBar';
import TrendingSearches from 'components/TrendingSearches';
import { GIPHY_API_KEY } from 'App';
import { fetchData } from 'helpers/fetchData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from 'redux/search/actions';

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.search.query);

  useEffect(() => {
    if (searchQuery) {
      fetchData(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchQuery}&limit=10`,
        setResults,
        dispatch
      );
    }
  }, [dispatch, searchQuery]);

  const searchResults = useSelector(state => state.search.results);

  return (
    <>
      <h3>Search</h3>
      <SearchBar />
      {searchResults.map(gif => (
        <Gif key={gif.id} src={gif.images.preview_gif.url} alt={gif.title} />
      ))}
      <TrendingSearches />
    </>
  );
};

export default Search;
