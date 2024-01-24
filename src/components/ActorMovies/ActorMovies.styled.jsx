import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ActorMoviesContainer = styled.div`
  overflow-x: auto;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
  white-space: nowrap;
`;

export const MovieItem = styled.li`
  width: 130px;

  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const MovieLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
export const MovieWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.p`
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
`;

export const MovieImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;
