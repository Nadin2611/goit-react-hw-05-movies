import { useLocation } from 'react-router-dom';
import { BASE_URL } from 'pages/MovieDetailsPage';
import { defaultImageActor } from 'service/defaultImages';
import {
  Container,
  List,
  ActorItem,
  ActorLink,
  ActorImage,
  ActorWrapper,
  ActorInfoWrapper,
  ActorName,
} from './ActorList.styled';

const ActorList = ({ persons }) => {
  const location = useLocation();

  return (
    <Container>
      <List>
        {persons.map(({ id, name, profile_path }) => {
          const imageURL = `${BASE_URL}${profile_path}`;
          return (
            <ActorItem key={id}>
              <ActorLink to={`/person/${id}`} state={{ from: location }}>
                <ActorWrapper>
                  <ActorImage
                    src={profile_path ? imageURL : defaultImageActor}
                    alt="actor-foto"
                    width="200"
                    height="310"
                  />
                </ActorWrapper>
                <ActorInfoWrapper>
                  <ActorName> {name}</ActorName>
                </ActorInfoWrapper>
              </ActorLink>
            </ActorItem>
          );
        })}
      </List>
    </Container>
  );
};

export default ActorList;
