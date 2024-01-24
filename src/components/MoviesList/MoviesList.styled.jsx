import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
  justify-content: center;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  width: 250px;
`;

export const MovieLink = styled(Link)`
  font-size: 18px;
  color: white;
  text-decoration: none;
`;
export const MovieImage = styled.img`
  border-radius: 10px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const MovieRating = styled.div`
  background-color: blue;
  width: 40px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -16px;
  left: 10px;
`;

export const MovieWrapper = styled.div`
  position: relative;
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const MovieYear = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
