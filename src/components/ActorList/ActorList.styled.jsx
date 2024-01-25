import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  justify-content: center;
`;

export const ActorItem = styled.li`
  margin-bottom: 10px;
  width: 200px;
`;

export const ActorLink = styled(Link)`
  font-size: 18px;
  color: white;
  text-decoration: none;
`;
export const ActorImage = styled.img`
  border-radius: 10px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ActorWrapper = styled.div``;

export const ActorName = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const ActorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
