import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuery, setQuery } from 'redux/search/actions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const query = useSelector(state => state.search.query);

  useEffect(() => setSearchQuery(query), [query]);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const query = searchQuery;
    dispatch(setQuery(query));
  };

  const handleChange = event => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit} onReset={() => dispatch(resetQuery())}>
        <input
          placeholder="Type something..."
          value={searchQuery}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
        <input type="reset" value="Reset" />
      </form>
    </>
  );
};

export default SearchBar;
