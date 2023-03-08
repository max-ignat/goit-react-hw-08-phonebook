import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const FormInput = styled(Field)`
  border-radius: 10px;
  margin-left: 10px;
`;

export const Error = styled(ErrorMessage)`
margin-top: 5px;
margin-left: 80px;
font-size: 12px;
color: red;
`

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 20px;
`;

export const FormWrap = styled(Form)`
  display: flex;
  width: 600px;
  margin: auto;

`;

export const Label = styled.label`
  margin: 10px auto;
  
`;

export const Button = styled.button`
  margin: auto;
  outline: none;
  padding: 0 10px;
  width: 99px;
  height: 20px;
  color: #221212;
  background-color: lightgray;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: inherit;
  }
`;