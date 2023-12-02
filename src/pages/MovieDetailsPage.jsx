import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId); //params -деструтуризували з...

  useEffect(() => {
    // запит, якщо потрібно
  }, []);
  return (
    <div>
      <h2>Movie</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
