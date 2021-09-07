import Gif from 'components/Gif';
import SearchBar from 'components/SearchBar';
import { GIPHY_API_KEY } from 'constants/index';
import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from 'redux/search/actions';

const Search = () => {
  const searchQuery = useSelector(state => state.search.query);

  const { data, pending } = useFetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchQuery}&limit=10`
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pending && data.length) dispatch(setResults(data));
  }, [dispatch, data, pending]);

  const searchResults = useSelector(state => state.search.results);

  return (
    <>
      <h3>Search</h3>
      <SearchBar />
      {searchResults.map(gif => (
        <Gif key={gif.id} src={gif.images.preview_gif.url} alt={gif.title} />
      ))}
    </>
  );
};

export default Search;
