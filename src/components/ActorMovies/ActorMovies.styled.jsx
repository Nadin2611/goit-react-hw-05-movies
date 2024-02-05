import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ActorMoviesContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  max-width: 375px;

  /* Стилізація горизонтальної полоси прокрутки */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 6px;
    width: 50px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 6px;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const MovieItem = styled.li`
  width: 100px;
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
  font-size: 10px;
  padding-top: 4px;
  text-align: center;
  margin: 0 auto;
`;

export const MovieImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;
