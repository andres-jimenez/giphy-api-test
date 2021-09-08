import Search from 'components/Search';
import TrendingGifs from 'components/TrendingGifs';

export const GIPHY_API_KEY = '1J7LMuRtY3q2DNNEN9Qr4HQj4NG6X8fY';

function App() {
  return (
    <div>
      <h1>Giphy API Test</h1>
      <Search />
      <TrendingGifs />
    </div>
  );
}

export default App;
