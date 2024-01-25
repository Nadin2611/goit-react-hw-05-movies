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
