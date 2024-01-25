import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 10px 10px;
  align-items: center;

  &:hover,
  &:focus {
    color: blue;
  }
`;
