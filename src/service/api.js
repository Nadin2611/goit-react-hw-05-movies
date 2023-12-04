import axios from 'axios';

const API_KEY = '2b5715eb91948ab21d8a3671ab9cf18a';
const BASE_URL = 'https://api.themoviedb.org/3';

const getMovies = async (endpoint, params = {}) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return response.data;
};

const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  const { title, poster_path, popularity, overview, genres, release_date } =
    data.getMovies[0];
  return {
    title,
    poster_path,
    popularity,
    overview,
    genres,
    release_date,
  };
};

export default getMovies;
export { getMovieDetails };
