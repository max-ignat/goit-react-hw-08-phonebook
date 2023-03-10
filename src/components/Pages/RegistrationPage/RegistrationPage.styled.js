import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormInput = styled(Field)`
  border-radius: 10px;
  margin: 10px auto;
  min-width: 500px;
  height: 30px;
  border: 1px solid lightgray;
  padding: 5px;
  font-size: 16px;
  display: block;
  justify-content: right;
`;

export const Error = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 12px;
  color: orangered;
`;

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 20px;
`;

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: auto;
`;

export const Label = styled.label`
display: block;
justify-content:left;
  margin: 10px auto;
  font-size: 16px;
  
`;

export const Button = styled.button`
  margin: 20px auto;
  outline: none;
  padding: 10px 20px;
  width: 150px;
  color: #221212;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: inherit;
  }
`;
