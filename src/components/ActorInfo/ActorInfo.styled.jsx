import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const FotoContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

export const ActorFoto = styled.img`
  height: auto;
  border-radius: 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 250px;
    height: 380px;
  }

  @media (min-width: 1440px) {
    width: 300px;
    height: 450px;
  }
`;

export const ActorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const ActorDetailsTitle = styled.h2`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  padding-top: 12px;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const InfoWrapper = styled.div``;

export const Gender = styled.div`
  /* Your Gender styles here */
`;

export const Birthday = styled.div`
  /* Your Birthday styles here */
`;

export const Deathday = styled.div``;

export const BirthdayPlace = styled.div`
  /* Your BirthdayPlace styles here */
`;

export const OtherNames = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const BiographyContainer = styled.div``;

export const ActorName = styled.h1``;

export const Biography = styled.p`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const InfoTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const NoBiography = styled.p`
  font-size: 18px;
`;

export const ActorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;
