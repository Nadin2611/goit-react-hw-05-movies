import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import getMovies from 'service/api';

import {
  ActorName,
  CastItem,
  CharacterName,
  Container,
  List,
  ProfileImage,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { StyledLink } from 'components/MovieInfo/MovieInfo.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        setIsLoading(true);

        const actorInfo = await getMovies(`movie/${movieId}/credits`);

        if (actorInfo.cast.length === 0) {
          toast.warn('Sorry, there is no information about the cast.');
        }

        setCast(actorInfo.cast);
        console.log(actorInfo.cast);
      } catch (error) {
        toast.error('Something went wrong!!!');
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  const defaulImage =
    'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png';

  return (
    <Container>
      {isLoading && <Loader />}

      {cast && (
        <List>
          {cast.map(person => (
            <StyledLink key={person.id} to={`/person/${person.id}`}>
              <CastItem>
                <ProfileImage
                  src={
                    person.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                      : defaulImage
                  }
                  alt="profile-foto"
                />

                <ActorName>{person.name}</ActorName>
                <CharacterName>{person.character}</CharacterName>
              </CastItem>
            </StyledLink>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cast;
