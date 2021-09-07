import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/search/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target[0].value;
    dispatch(setQuery(query));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Type something..." />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
