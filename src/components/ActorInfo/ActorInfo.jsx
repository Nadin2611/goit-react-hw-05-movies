import { Title } from 'components/MovieInfo/MovieInfo.styled';
import {
  Container,
  FotoContainer,
  ActorFoto,
  ActorDetails,
  Gender,
  Birthday,
  BirthdayPlace,
  OtherNames,
  BiografyContainer,
  ActorName,
  Biografy,
  Deathday,
  InfoTitle,
  InfoWrapper,
  ActorInfoWrapper,
} from './ActorInfo.styled';

const ActorInfo = ({
  profile_path,
  gender,
  birthday,
  deathday,
  place_of_birth,
  also_known_as,
  name,
  biography,
}) => {
  const getGenderString = gender => {
    return gender === 1 ? 'Female' : gender === 2 ? 'Male' : 'Unknown';
  };

  return (
    <Container>
      <FotoContainer>
        {profile_path && (
          <ActorFoto
            src={profile_path}
            alt="actor-foto"
            width="100"
            height="100"
          />
        )}
        <ActorDetails>
          <Title>Personal information</Title>

          <InfoWrapper>
            <InfoTitle>Gender</InfoTitle>
            <Gender>{getGenderString(gender)}</Gender>
          </InfoWrapper>

          <InfoWrapper>
            <InfoTitle>Birthday</InfoTitle>
            <Birthday>{birthday}</Birthday>
          </InfoWrapper>

          {deathday && (
            <InfoWrapper>
              <InfoTitle>Deathday</InfoTitle>
              <Deathday>{deathday}</Deathday>
            </InfoWrapper>
          )}

          <InfoWrapper>
            <InfoTitle>Place of birth</InfoTitle>
            <BirthdayPlace>{place_of_birth}</BirthdayPlace>
          </InfoWrapper>

          {also_known_as && also_known_as.length > 0 && (
            <InfoWrapper>
              <InfoTitle>Also known as</InfoTitle>
              <OtherNames>
                {also_known_as.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </OtherNames>
            </InfoWrapper>
          )}
        </ActorDetails>
      </FotoContainer>
      <ActorInfoWrapper>
        <ActorName>{name}</ActorName>{' '}
        <BiografyContainer>
          <Title>Biografy</Title>
          <Biografy>{biography}</Biografy>
        </BiografyContainer>
      </ActorInfoWrapper>
    </Container>
  );
};

export default ActorInfo;
