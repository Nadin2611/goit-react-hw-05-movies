import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
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
} from './MovieInfo.styled';

const MovieInfo = ({
  title,
  poster_path,
  vote_average,
  overview,
  genres,
  release_date,
}) => {
  const date = new Date(release_date);
  const year = date.getFullYear();
  const vote = (vote_average * 10).toFixed();

  return (
    <Container>
      <Title>
        {title} ({year})
      </Title>
      <Wrapper>
        {poster_path && (
          <Image src={poster_path} alt="movie-foto" width="100" height="100" />
        )}
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
      </Wrapper>
      <InfoContainer>
        <AdditionalInfo>Additional information</AdditionalInfo>
        <List>
          <ListItem>
            <StyledLink to="cast">Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </InfoContainer>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieInfo;
