import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: '2b5715eb91948ab21d8a3671ab9cf18a',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => {
        response.json();
        console.log(response);
      })
      .then(data => {
        const moviesData = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
        }));
        setMovies(moviesData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
