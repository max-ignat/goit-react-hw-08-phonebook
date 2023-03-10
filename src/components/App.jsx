import React, {  useEffect } from 'react';
import { Box } from '../App.styled';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
// import Modal from './Modal';
// import { ModalButton } from './Modal/Modal.styled';
// import { Title } from './Form/Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import Navbar from './Navbar';
import { lazy,Suspense } from 'react';
import { Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  // console.log(contacts)
  // const toggleModal = () => {
  //   if (showModal) {
  //     setShowModal(false);
  //   } else {
  //     setShowModal(true);
  //   }
  // };
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
    // toggleModal();
  };

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
    console.log('deleted');
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
    // setFilter(target.value);
  };

  const filteredContacts = () => {
    const lowerCasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  };
  const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
  const RegistrationPage = lazy(() => import('./Pages/RegistrationPage/RegistrationPage'));
  const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
  return (
    <Box>
      <Navbar></Navbar>
      {/* <Title>Phone Book</Title> */}
      <Suspense fallback={<p> wait a sec...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
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
          <Route path="/login" element={<LoginPage />} />
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
