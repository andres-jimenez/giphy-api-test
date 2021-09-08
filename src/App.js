import styled from 'styled-components';
import Search from 'components/Search';
import TrendingGifs from 'components/TrendingGifs';

const StyledDiv = styled.div`
  background: #07002e;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-family: sans-serif;
`;

function App() {
  return (
    <StyledDiv>
      <StyledH1>Giphy API Test</StyledH1>
      <Search />
      <TrendingGifs />
    </StyledDiv>
  );
}

export default App;
