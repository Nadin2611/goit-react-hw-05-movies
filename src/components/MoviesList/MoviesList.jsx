import { useLocation } from 'react-router-dom';
import { Container, List, MovieItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <List>
        {movies.map(({ id, name, title, release_date }) => {
          const year = release_date ? new Date(release_date).getFullYear() : '';
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {title ?? name} ({year})
              </MovieLink>
            </MovieItem>
          );
        })}
      </List>
    </Container>
  );
};

export default MoviesList;
