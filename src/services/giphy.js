import fetchData from 'helpers/fetchData';
import translateParams from 'helpers/translateParams';

const baseUrl = 'https://api.giphy.com/v1/';
const apiKey = '1J7LMuRtY3q2DNNEN9Qr4HQj4NG6X8fY';

export const getTrendingGifs = async () => {
  const endpoint = 'gifs/trending?';
  const params = {
    api_key: apiKey,
    limit: '25',
  };

  return await fetchData(baseUrl + endpoint + translateParams(params));
};

export const getResults = async query => {
  const endpoint = 'gifs/search?';
  const params = {
    api_key: apiKey,
    q: query,
    limit: '10',
  };

  return await fetchData(baseUrl + endpoint + translateParams(params));
};

export const getTrendingSearches = async () => {
  const endpoint = 'trending/searches?';
  const params = {
    api_key: apiKey,
  };

  return await fetchData(baseUrl + endpoint + translateParams(params));
};
