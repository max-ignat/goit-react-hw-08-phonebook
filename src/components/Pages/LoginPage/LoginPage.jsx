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
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
// import { fetchAllContacts } from 'redux/contacts/contacts-operations';
const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

const LoginPage = () => {
  const [state, setFormState] = useState({
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

  const handleSubmit = event => {
    event.preventDefault();
    
    dispatch(login({email, password}));
    // dispatch(fetchAllContacts());
    // console.log('LOG IN FORM', state);

    reset();
  };

  const reset = () => {
    setFormState({ email: '', password: '' });
  };

  
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();

  const { email, password } = state;
const isLogin = useSelector(isUserLogin);

if (isLogin) {
  return <Navigate to="/contacts" />;
}
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
