import MovieVideo from 'components/MovieVideo/MovieVideo';
import {
  Container,
  Title,
  Wrapper,
  Image,
  UserScore,
  Overview,
  OverviewText,
  Genres,
  InfoContainer,
  AdditionalInfo,
  List,
  ListItem,
  StyledLink,
  DescriptionContainer,
  UserScoreValue,
  UserScoreWrapper,
  GenresTitle,
  GenresWrapper,
  DescriptionWrapper,
} from './MovieInfo.styled';

const MovieInfo = ({
  title,
  name,
  poster_path,
  backdrop_path,
  vote_average,
  overview,
  genres,
  release_date,
  videos,
  firstOfficialTrailer,
}) => {
  let year = '';
  if (release_date) {
    const date = new Date(release_date);
    year = date.getFullYear();
  }

  const vote = (vote_average * 10).toFixed();

  return (
    <Container>
      <Wrapper background={backdrop_path}>
        {poster_path && (
          <Image src={poster_path} alt="movie-foto" width="100" height="100" />
        )}
      </Wrapper>
      <Title>
        {title ?? name} {year && `(${year})`}
      </Title>
      <DescriptionWrapper>
        {' '}
        <DescriptionContainer>
          <UserScoreWrapper>
            <UserScore>User Score: </UserScore>
            <UserScoreValue>{vote}%</UserScoreValue>
          </UserScoreWrapper>
          <Overview>Overview: </Overview>
          <OverviewText>{overview}</OverviewText>
          <GenresWrapper>
            <GenresTitle>Genres:</GenresTitle>
            {genres && genres.length > 0 && (
              <Genres>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </Genres>
            )}
          </GenresWrapper>
        </DescriptionContainer>
        {firstOfficialTrailer && (
          <MovieVideo
            name={firstOfficialTrailer.name}
            type={firstOfficialTrailer.type}
            official={firstOfficialTrailer.official}
            videoKey={firstOfficialTrailer.key}
          />
        )}
      </DescriptionWrapper>

      <InfoContainer>
        <AdditionalInfo></AdditionalInfo>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </InfoContainer>
    </Container>
  );
};

export default MovieInfo;
