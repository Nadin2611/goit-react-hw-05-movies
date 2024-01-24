import { useLocation } from 'react-router-dom';

import { BASE_URL } from 'pages/MovieDetailsPage';
import { defaultImageMovie } from 'service/defaultImages';

import {
  ActorMoviesContainer,
  MoviesList,
  MovieItem,
  MovieLink,
  MovieWrapper,
  MovieTitle,
  MovieImage,
} from './ActorMovies.styled';

const ActorMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <ActorMoviesContainer>
      <MoviesList>
        {movies.map(movie => {
          const imageURL = `${BASE_URL}${movie.poster_path}`;
          return (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieWrapper>
                  <MovieImage
                    src={movie.poster_path ? imageURL : defaultImageMovie}
                    alt="movie-foto"
                    width="130"
                    height="195"
                  />
                  <MovieTitle> {movie.title ?? movie.name}</MovieTitle>
                </MovieWrapper>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MoviesList>
    </ActorMoviesContainer>
  );
};

export default ActorMovies;
