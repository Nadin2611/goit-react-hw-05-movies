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

// const getRequestToken = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}authentication/token/new`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     const requestToken = response.data.request_token;
//     console.log(response);
//     console.log(response.data);
//     return requestToken;
//   } catch (error) {
//     console.error('Помилка при отриманні запитового токену:', error);
//     throw error;
//   }
// };

// const createSessionId = async requestToken => {
//   try {
//     const response = await axios.post(`${BASE_URL}authentication/session/new`, {
//       request_token: requestToken,
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data.session_id;
//   } catch (error) {
//     console.error('Помилка при створенні сеансового ідентифікатора:', error);
//     throw error;
//   }
// };

// const validateTokenWithLogin = async (username, password, requestToken) => {
//   try {
//     // console.log(username);
//     // console.log(password);
//     // console.log(requestToken);

//     const response = await axios.post(
//       `${BASE_URL}authentication/token/validate_with_login`,
//       {
//         username: username,
//         password: password,
//         request_token: requestToken,
//       },
//       {
//         params: {
//           api_key: API_KEY,
//         },
//       }
//     );

//     return response.data.session_id;
//   } catch (error) {
//     console.error('Помилка при авторизації токену:', error);
//     throw error;
//   }
// };

export { getMovies };
