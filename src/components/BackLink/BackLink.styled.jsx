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

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 8px 8px;
    width: 120px;

    &:hover,
    &:focus {
      color: blue;
    }
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    padding: 10px 10px;
    width: 140px;
  }
`;
