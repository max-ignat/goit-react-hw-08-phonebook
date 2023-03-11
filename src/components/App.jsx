import React, { useEffect } from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { current } from 'redux/auth/auth-operations';
import NavbaR from './Navbar';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
import PublicRoute from './PublicRoutes';
import PrivatRoutes from './PrivatRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);
  console.log(isLogin);
  useEffect(() => {
    dispatch(fetchAllContacts());
    dispatch(current());
  }, [dispatch, isLogin]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
    console.log('deleted');
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const filteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };
  const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
  const RegistrationPage = lazy(() =>
    import('./Pages/RegistrationPage/RegistrationPage')
  );
  const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));

  return (
    <Box>
      <NavbaR></NavbaR>
      <Suspense fallback={<p> wait a sec...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivatRoutes />}>
            <Route
              path="/contacts"
              element={
                <>
                  <Form submitPropValue={handleAddContact} />

                  <Contacts
                    contacts={filteredContacts()}
                    onDeleteContact={handleDeleteContact}
                  />
                  <Filter value={filter} onChange={changeFilter} />
                </>
              }
            />
          </Route>
          {/* <ModalButton type="button" onClick={toggleModal}>
          Add contact
        </ModalButton> */}
          {/* {showModal && (
            <Modal onClose={toggleModal}>
              <Form submitPropValue={handleAddContact} />
              <ModalButton type="button" onClick={toggleModal}>
                minimize
              </ModalButton>
            </Modal>
          )}
          <Filter value={filter} onChange={changeFilter} />
          <Contacts
            contacts={filteredContacts()}
            onDeleteContact={handleDeleteContact}
          /> */}
        </Routes>
      </Suspense>
    </Box>
  );
};
export default App;
