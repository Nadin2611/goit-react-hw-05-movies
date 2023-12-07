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
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <ProfileImage
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaulImage
                }
                alt="profile-foto"
              />

              <ActorName>{actor.name}</ActorName>
              <CharacterName>{actor.character}</CharacterName>
            </CastItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cast;
