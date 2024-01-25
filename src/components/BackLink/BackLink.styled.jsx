import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 6px 6px;
  width: 100px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 13px 3px blue;

  &:hover,
  &:focus {
    color: blue;
  }
`;
