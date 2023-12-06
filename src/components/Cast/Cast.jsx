import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError('');
        const actorInfo = await getMovies(`movie/${movieId}/credits`);

        setCast(actorInfo.cast);
      } catch (error) {
        setError('Something went wrong!!!');
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Error</p>}
      {cast && (
        <List>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <ProfileImage
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
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
