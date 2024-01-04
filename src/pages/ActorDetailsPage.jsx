import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import getMovies from 'service/api';
import ActorInfo from 'components/ActorInfo/ActorInfo';
import { Loader } from 'components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';

const ActorDetailsPage = () => {
  const { personId } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchActorInfo = async () => {
      try {
        setIsLoading(true);
        const personData = await getMovies(`person/${personId}`);

        setPersonInfo(personData);
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
    <div>
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
      />
    </div>
  );
};

export default ActorDetailsPage;
