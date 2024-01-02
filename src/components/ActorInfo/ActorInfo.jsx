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
    switch (gender) {
      case 0:
        return 'Not set / not specified';
      case 1:
        return 'Female';
      case 2:
        return 'Male';
      case 3:
        return 'Non-binary';
      default:
        return 'Unknown';
    }
  };

  const defaulImage =
    'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png';

  return (
    <Container>
      <FotoContainer>
        {profile_path && (
          <ActorFoto
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaulImage
            }
            alt="actor-foto"
            width="300"
            height="450"
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
