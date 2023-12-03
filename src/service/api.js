import axios from 'axios';

const API_KEY = '2b5715eb91948ab21d8a3671ab9cf18a';
const BASE_URL = 'https://api.themoviedb.org/3';

const getMovie = async endpoint => {
  const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
  return response.data;
};

export default getMovie;
