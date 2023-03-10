import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const FormInput = styled(Field)`
  border-radius: 10px;
  margin-left: 10px;
  height:38px;
  /* margin-right: 0; */
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
  /* margin-left: 0; */

`;

export const Label = styled.label`
  margin: 10px auto;
  
`;

export const Button = styled.button`
  margin: 10px auto;
  margin-left: 5px;
  outline: none;
  /* padding: 0 10px; */
  width: 70px;
  height: 38px;
  border-radius: 5px;
  /* padding: 6px 12px; */
  color: #221212;
  background-color: azure;
  border: solid black 1px;
  /* border-radius: 2px; */
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: white;
    border: 1px solid black;
    background-color: rgb(13, 110, 253);
  }
`;