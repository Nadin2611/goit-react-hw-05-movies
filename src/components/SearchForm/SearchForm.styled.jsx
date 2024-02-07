import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 300px;
  color: white;
  border-radius: 18px;
  border: none;
  font-size: 14px;
  background-color: transparent;
  border: 2px solid white;
  transition: border-color 0.3s;

  &:hover,
  &:focus,
  &:not(:placeholder-shown) {
    font-size: 14px;
    border-color: blue;
  }

  @media (min-width: 768px) {
    width: 350px;
    font-size: 18px;
    &:hover,
    &:focus,
    &:not(:placeholder-shown) {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    width: 450px;
    font-size: 20px;
    &:hover,
    &:focus,
    &:not(:placeholder-shown) {
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 18px;
  font-size: 14px;
  text-decoration: none;
  background-color: white;
  color: blue;
  font-weight: 500;
  border: none;
  position: absolute;
  right: 1px;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    color: white;
    background-color: blue;
  }

  @media (min-width: 768px) {
    font-size: 18px;

    &:hover,
    &:focus {
      color: white;
      background-color: blue;
    }
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
