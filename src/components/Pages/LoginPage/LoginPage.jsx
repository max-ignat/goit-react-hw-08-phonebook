import React, { useState } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import {
  Title,
  FormInput,
  Label,
  FormWrap,
  Error,
} from 'components/Pages/RegistrationPage/RegistrationPage.styled';
import { Button } from 'react-bootstrap';
const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

const LoginPage = ({ onSubmit }) => {
  const [state, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('LOG IN FORM',state);
    // onSubmit(formData);

    reset();
  };

  const reset = () => {
    setFormState({ name: '', email: '', password: '' });
  };

  
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const { email, password } = state;

  return (
    <div>
      <Title>Log In </Title>

      <Formik validationSchema={schema}>
        <FormWrap onSubmit={handleSubmit}>
          
          <Label htmlFor={emailInputId}>
            Email
            <FormInput
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Type your email address"
              value={email}
              id={emailInputId}
              required
            />
            <Error component="div" name="email" />
          </Label>

          <Label htmlFor={passwordInputId}>
            Password
            <FormInput
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Type your password"
              value={password}
              id={passwordInputId}
              required
            />
            <Error component="div" name="password" />
          </Label>
          {/* 
            <Button type="submit">Register</Button> */}
          <Button variant="outline-primary" type="submit">
            Log In
          </Button>
        </FormWrap>
      </Formik>
    </div>
  );
};

// Form.propTypes = {
//   submitPropValue: PropTypes.func.isRequired,
// };

export default LoginPage;
