import {
  Container,
  Title,
  Image,
  UserScore,
  Overview,
  Genres,
  AdditionalInfo,
  List,
  ListItem,
  StyledLink,
} from './MovieInfo.styled';

const MovieDetails = ({
  title,
  poster_path,
  popularity,
  overview,
  genres,
  release_date,
}) => {
  const year = release_date.split('-')[0];
  return (
    <Container>
      <Title>
        {title} ({year})
      </Title>
      <Image src="movies.jpg" alt="movie-foto" />
      <UserScore>User Score: {popularity}%</UserScore>

      <Overview>Overview: {overview}</Overview>

      <Genres>
        Genres:{' '}
        {genres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </Genres>
      <AdditionalInfo>Additional information</AdditionalInfo>

      <List>
        <ListItem>
          <StyledLink to="cast">Cast</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="reviews">Reviews</StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};

export default MovieDetails;
