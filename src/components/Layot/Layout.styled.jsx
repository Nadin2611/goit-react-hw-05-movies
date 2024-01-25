import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  // margin: 0 auto;
  // max-width: 335px;
  // padding: 0 10px;
`;

export const Header = styled.header`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  font-size: 20px;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px 16px;
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
