import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  transition: box-shadow 0.3s, color 0.3s, transform 0.3s;

  &.active {
    color: white;
    box-shadow: 0 0 13px 3px blue;
  }

  @media (min-width: 768px) {
    padding: 10px 14px;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 18px;
  font-size: 24px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  transition: transform 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
