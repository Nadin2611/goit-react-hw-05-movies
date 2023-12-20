import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 10px 20px;
  width: 350px;
  border-radius: 18px;

  &:hover,
  &:focus,
  &:not(:placeholder-shown) {
    border-color: grey;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 18px;
  font-size: 24px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  border: none;
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
