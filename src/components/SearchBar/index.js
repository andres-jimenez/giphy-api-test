import { useDispatch } from 'react-redux';
import { resetQuery, setQuery } from 'redux/search/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target[0].value;
    dispatch(setQuery(query));
  };

  return (
    <>
      <form onSubmit={handleSubmit} onReset={() => dispatch(resetQuery())}>
        <input placeholder="Type something..." />
        <input type="submit" value="Search" />
        <input type="reset" value="Reset" />
      </form>
    </>
  );
};

export default SearchBar;
