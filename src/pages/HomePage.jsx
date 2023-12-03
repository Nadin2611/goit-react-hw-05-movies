import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getMovie from 'service/api';

const HomePage = () => {
  const [trendingMovies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const trendingEndpoint = await getMovie('/trending/movie/week');

        console.log(trendingEndpoint);
        setMovies(trendingEndpoint.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      }
    };
    fetchTrendingMovie();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title ?? movie.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

// https://api.themoviedb.org/3/trending/movie/week?api_key=8817625a99e963f36ab0e1c9bab55397

// https://api.themoviedb.org/3/trending/movie?api_key=2b5715eb91948ab21d8a3671ab9cf18a
