import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import getMovies from 'service/api';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import BackLink from 'components/BackLink/BackLink';

export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movieDetails = await getMovies(`movie/${movieId}`);
        console.log(movieDetails);

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
      <BackLink to={BackLinkLocationRef.current}>Go back</BackLink>
      {isLoading && <Loader />}
      {details && (
        <MovieInfo
          {...details}
          poster_path={
            details.poster_path
              ? `${BASE_URL}${details.poster_path}`
              : defaulImage
          }
          backdrop_path={
            details.backdrop_path
              ? `${BASE_URL}${details.backdrop_path}`
              : defaulImage
          }
        />
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
