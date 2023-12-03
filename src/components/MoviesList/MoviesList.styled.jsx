import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 20px;
`;

export const List = styled.ul`
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: blue;

  &:hover,
  &:focus {
    color: red;
  }
`;
