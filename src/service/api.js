import axios from 'axios';

const API_KEY = '2b5715eb91948ab21d8a3671ab9cf18a';
export const BASE_URL = 'https://api.themoviedb.org/3/';

const getMovies = async (endpoint, params = {}) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {});
  return response.data;
};

const getRequestToken = async () => {
  try {
    const response = await axios.get(`${BASE_URL}authentication/token/new`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(response);
    return response.data.request_token;
  } catch (error) {
    console.error('Помилка при отриманні токену:', error);
    throw error;
  }
};

const validateTokenWithLogin = async (username, password, requestToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}authentication/token/validate_with_login`,
      {
        request_token: requestToken,
      },
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    return response.data.session_id;
  } catch (error) {
    console.error('Помилка при авторизації токену:', error);
    throw error;
  }
};

export { getMovies, getRequestToken, validateTokenWithLogin };
