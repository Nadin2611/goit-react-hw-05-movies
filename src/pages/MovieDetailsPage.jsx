import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import getMovies from 'service/api';
import { defaultImageMovie } from 'service/defaultImages';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import BackLink from 'components/BackLink/BackLink';

export const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  const findFirstOfficialTrailer = videos => {
    return videos?.find(
      video => video.type === 'Trailer' && video.official === true
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movieDetails = await getMovies(`movie/${movieId}`);

        setDetails(movieDetails);

        const movieVideos = await getMovies(`movie/${movieId}/videos`);
        setVideos(movieVideos.results);
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

  const filteredVideos = findFirstOfficialTrailer(videos);

  return (
    <div>
      <BackLink to={BackLinkLocationRef.current}>Go back</BackLink>
      {isLoading && <Loader />}
      {details && (
        <MovieInfo
          {...details}
          videos={videos}
          firstOfficialTrailer={filteredVideos}
          poster_path={
            details.poster_path
              ? `${BASE_URL}${details.poster_path}`
              : defaultImageMovie
          }
          backdrop_path={
            details.backdrop_path
              ? `${BASE_URL}${details.backdrop_path}`
              : defaultImageMovie
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
