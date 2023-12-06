import axios from 'axios';

const API_KEY = '2b5715eb91948ab21d8a3671ab9cf18a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovies = async (endpoint, params = {}) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return response.data;
};

export default getMovies;
