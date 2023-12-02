const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjU3MTVlYjkxOTQ4YWIyMWQ4YTM2NzFhYjljZjE4YSIsInN1YiI6IjY1NmFmYjM3NmVlY2VlMDEzYmQ5YWFkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hMXNt4sNjhZI34ljbr7SK3g4lEZlXLcB5tgKf2cI4Iw',
  },
};

const api = fetch(
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  options
)
  .then(response => response.json())
  .then(data => {
    const movies = data.results.map(movie => movie.title);
    console.log('Трендові фільми:', movies);
  })
  .catch(err => console.error(err));

export default api;
