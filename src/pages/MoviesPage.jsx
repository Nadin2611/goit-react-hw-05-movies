import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  useEffect(() => {
    // запит, якщо потрібно - state, loding,error
  }, []);
  return (
    <div>
      <h2>Movies</h2>
      <div>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5', 'movie-6'].map(
          movie => {
            return (
              <Link key={movie} to={`${movie}`}>
                {movie}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
