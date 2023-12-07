import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 10px;
  align-items: center;

  &:hover {
    color: red;
  }
`;
