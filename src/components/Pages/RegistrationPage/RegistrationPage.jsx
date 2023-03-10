import React, { useState } from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import * as yup from 'yup';
import { Title, FormInput, Label, FormWrap, Error } from 'components/Pages/RegistrationPage/RegistrationPage.styled';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});



const RegistrationPage = () => {
  const isLogin = useSelector(isUserLogin);
  const [state, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSignUp = event => {
    event.preventDefault();
    // console.log('REGISTER FORM',state);
    // onSubmit(state);
    dispatch(signup(state));

    reset();
  };

  const reset = () => {
    setFormState({ name: '', email: '', password: '' });
  };

  const nameInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const { name, email, password } = state;

  if (isLogin) {
  return <Navigate to='/contacts'/>
}

  return (
    <div>
      <Title>Registration Form</Title>

      <Formik validationSchema={schema}>
        <FormWrap onSubmit={handleSignUp}>
          <Label htmlFor={nameInputId}>
            Name
            <FormInput
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Type your name"
              value={name}
              id={nameInputId}
              required
            />
            <Error component="div" name="name" />
          </Label>

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
            Register
          </Button>
        </FormWrap>
      </Formik>
    </div>
  );
};

// Form.propTypes = {
//   submitPropValue: PropTypes.func.isRequired,
// };

export default RegistrationPage;