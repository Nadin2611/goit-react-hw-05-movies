import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > ul {
    display: flex;
    list-style: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 24px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 5px;
      right: 5px;
      bottom: 0;
      height: 2px;
      background-color: red;
    }
  }

  &.active {
    color: red;
  }
`;
