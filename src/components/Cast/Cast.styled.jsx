import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const CastItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid white;
  border-radius: 10px;
  padding-bottom: 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  max-width: 122px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 152px;
  }

  @media (min-width: 1440px) {
    max-width: 172px;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 170px;
  margin-bottom: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 768px) {
    width: 150px;
    height: 200px;
  }

  @media (min-width: 1440px) {
    width: 170px;
    height: 230px;
  }
`;

export const ActorName = styled.h2`
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const CharacterName = styled.p`
  font-size: 10px;
  padding-left: 4px;
  padding-right: 4px;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const StyledLinkActor = styled(Link)`
  text-decoration: none;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (min-width: 768px) {
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }

  @media (min-width: 1440px) {
  }
`;
