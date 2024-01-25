import styled from 'styled-components';

export const HeaderBurger = styled.div``;

export const HeaderMenuToggle = styled.input`
  opacity: 0;
`;

export const HeaderMenuBtn = styled.label`
  display: flex;
  align-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
  margin-left: auto;
  top: 4px;
`;

export const BurgerSpan = styled.span`
  position: absolute;
  width: 32px;
  height: 3px;
  border-radius: 5px;
  background-color: white;
  transition-duration: 0.25s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 32px;
    height: 3px;
    border-radius: 5px;
    background-color: white;
    transition-duration: 0.25s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;
