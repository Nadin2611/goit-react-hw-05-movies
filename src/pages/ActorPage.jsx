import { useState, useEffect } from 'react';
import getMovies from 'service/api';
import ActorInfo from 'components/ActorInfo/ActorInfo';
import { useParams } from 'react-router-dom';

const ActorPage = () => {
  const { personId } = useParams();
  const [personInfo, setPersonInfo] = useState(null);

  console.log(personId);

  useEffect(() => {
    const fetchActorInfo = async () => {
      try {
        const personData = await getMovies(`person/${personId}`);

        setPersonInfo(personData);
        console.log(personData.gender);
      } catch (error) {
        console.error('Error fetching actor information:', error.message);
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

export default ActorPage;
