import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBurger = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 28px;

  &:before,
  &:after,
  .burger-1,
  .burger-2 {
    content: '';
    background-color: white;
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
  }

  &:before {
    top: 1px;
  }

  &:after {
    bottom: 2px;
  }

  .burger-1 {
    top: 8px;
  }

  .burger-2 {
    top: 16px;
  }

  @media (min-width: 767px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  overflow: auto;
  width: 100vw;
  height: 100%;
  padding-top: 280px;
  background-color: black;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: white;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const MobileMenuItem = styled.li``;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 24px;
  text-decoration: none;
  color: blue;
  transition: box-shadow 0.3s, color 0.3s, transform 0.3s;
`;
