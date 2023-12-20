import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  align-items: center;

  &:hover,
  &:focus {
    color: blue;
  }
`;
