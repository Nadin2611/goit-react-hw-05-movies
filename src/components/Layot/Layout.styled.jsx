import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 30px;

  > ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
  }
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 18px;
  font-size: 24px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  &:focus {
    color: white;
    background-color: blue;
  }

  &.active {
    color: white;
    background-color: blue;
  }
`;
