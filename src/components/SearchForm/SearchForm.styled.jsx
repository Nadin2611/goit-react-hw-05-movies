import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  padding: 8px;
  width: 350px;
  border-radius: 4px;

  &:hover,
  &:focus,
  &:not(:placeholder-shown) {
    border-color: grey;
  }
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #f5f5f5;
  border: 1px solid #383838;
  height: 35px;
  width: 100px;
  border-radius: 4px;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #c8c8c8;
  }
`;
