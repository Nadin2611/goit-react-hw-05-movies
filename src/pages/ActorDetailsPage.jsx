import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import getMovies from 'service/api';
import ActorInfo from 'components/ActorInfo/ActorInfo';
import { Loader } from 'components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
import { Container } from 'components/Container/Container.styled';

const ActorDetailsPage = () => {
  const { personId } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personMovies, setPersonMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchActorInfo = async () => {
      try {
        setIsLoading(true);
        const personData = await getMovies(`person/${personId}`);

        const actorMovies = await getMovies(`person/${personId}/movie_credits`);
        console.log(actorMovies);
        const actorMoviesAll = actorMovies.cast;
        setPersonInfo(personData);
        setPersonMovies(actorMoviesAll);
      } catch (error) {
        toast.error('Something went wrong!!!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchActorInfo();
  }, [personId]);

  const {
    profile_path,
    gender,
    birthday,
    deathday,
    place_of_birth,
    also_known_as,
    name,
    biography,
  } = personInfo || {};

  return (
    <Container>
      <BackLink to={BackLinkLocationRef.current}>Go back</BackLink>
      {isLoading && <Loader />}
      <ActorInfo
        profile_path={profile_path}
        gender={gender}
        birthday={birthday}
        deathday={deathday}
        place_of_birth={place_of_birth}
        also_known_as={also_known_as}
        name={name}
        biography={biography}
        personMovies={personMovies}
      />
    </Container>
  );
};

export default ActorDetailsPage;
