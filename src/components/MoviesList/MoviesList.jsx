import { Container, List, MovieItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <Container>
      <List>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movie/${movie.id}`}>
              {movie.title ?? movie.name}
            </MovieLink>
          </MovieItem>
        ))}
      </List>
    </Container>
  );
};

export default MoviesList;
