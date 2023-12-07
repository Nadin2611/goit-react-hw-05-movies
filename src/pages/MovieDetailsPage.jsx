import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import getMovies from 'service/api';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movieDetails = await getMovies(`movie/${movieId}`);

        setDetails(movieDetails);
      } catch (error) {
        toast.error('Something went wrong!!!');
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  const defaulImage =
    'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <div>
      {isLoading && <Loader />}
      {details && (
        <MovieInfo
          {...details}
          poster_path={
            details.poster_path
              ? `${BASE_URL}${details.poster_path}`
              : defaulImage
          }
        />
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
