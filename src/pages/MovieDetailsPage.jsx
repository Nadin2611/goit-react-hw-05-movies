import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { getMovieDetails } from 'service/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    setIsLoading(true);
    setError('');
    getMovieDetails(movieId)
      .then(setDetails)
      .catch(error =>
        setError('Somesing wrong!!!').finally(() => {
          setIsLoading(false);
        })
      );
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  return (
    <div>
      {details && <MovieInfo {...details} />}
      <Outlet />
      {isLoading && <p>...Loading</p>}
    </div>
  );
};

export default MovieDetailsPage;
