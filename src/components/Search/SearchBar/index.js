import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetQuery, setQuery } from 'redux/search/actions';
import {
  SearchForm,
  SearchInput,
  ButtonsContainer,
  SearchButton,
} from './style';

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
      <SearchForm
        onSubmit={handleSubmit}
        onReset={() => dispatch(resetQuery())}
      >
        <SearchInput
          placeholder="Find a specific gif..."
          value={searchQuery}
          onChange={handleChange}
        />
        <ButtonsContainer>
          <SearchButton type="reset" value="Reset" />
          <SearchButton primary type="submit" value="Search" />
        </ButtonsContainer>
      </SearchForm>
    </>
  );
};

export default SearchBar;
