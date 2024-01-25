import { useLocation } from 'react-router-dom';
import { BASE_URL } from 'pages/MovieDetailsPage';
import { defaultImageMovie } from 'service/defaultImages';
import {
  Container,
  List,
  MovieItem,
  MovieLink,
  MovieImage,
  MovieRating,
  MovieWrapper,
  MovieInfoWrapper,
  MovieTitle,
  MovieYear,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <List>
        {movies.map(
          ({ id, name, title, release_date, poster_path, vote_average }) => {
            if (!release_date) {
              return null;
            }
            const year = new Date(release_date).getFullYear();
            const vote = (vote_average * 10).toFixed();
            const imageURL = `${BASE_URL}${poster_path}`;
            return (
              <MovieItem key={id}>
                <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                  <MovieWrapper>
                    <MovieImage
                      src={poster_path ? imageURL : defaultImageMovie}
                      alt="movie-foto"
                      width="200"
                      height="320"
                    />

                    <MovieRating>{vote}%</MovieRating>
                  </MovieWrapper>
                  <MovieInfoWrapper>
                    <MovieTitle> {title ?? name}</MovieTitle>
                    <MovieYear>({year})</MovieYear>
                  </MovieInfoWrapper>
                </MovieLink>
              </MovieItem>
            );
          }
        )}
      </List>
    </Container>
  );
};

export default MoviesList;
