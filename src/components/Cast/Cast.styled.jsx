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
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 170px;
  margin-bottom: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ActorName = styled.h2`
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const CharacterName = styled.p`
  font-size: 10px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const StyledLinkActor = styled(Link)`
  text-decoration: none;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
