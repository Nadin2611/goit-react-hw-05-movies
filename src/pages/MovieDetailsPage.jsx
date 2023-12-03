import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId); //params -деструтуризували з...

  useEffect(() => {
    // запит, якщо потрібно
  }, []);
  return (
    <div>
      <MovieDetails />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
