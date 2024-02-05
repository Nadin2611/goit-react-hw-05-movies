import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 335px;
  padding: 0 10px;
`;

export const Header = styled.header`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  font-size: 16px;

  > ul {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 14x;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  transition: box-shadow 0.3s, color 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: white;
    box-shadow: 0 0 13px 3px blue;
  }
`;

export const Logo = styled.span`
  letter-spacing: -0.5px;
  font-size: 1.7rem;
  font-weight: 500;
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

export const LogoImage = styled.img``;
