// import axios from 'axios';
// const contactsInstance = axios.create({
//   baseURL: 'https://64009edd29deaba5cb3bd01b.mockapi.io/',
//   // headers: { 'X-Custom-Header': 'foobar' } // Добавление заголовков
// });

// export const getAllContacts = async () => {
//   const { data } = await contactsInstance.get('/contacts/');
//   return data;
// };

// export const deleteContact = async id => {
//   const response = await contactsInstance.delete(`/contacts/${id}`);
//   return response;
// };

// export const addContacts = async data => {
//   const { data: response } = await contactsInstance.post(/contacts/, data);
//   return response;
// };
import axios from 'axios';

// const API_KEY = '64009edd29deaba5cb3bd01b';

export const getAllContacts = async () => {
  const { data } = await axios.get(
    'https://64009edd29deaba5cb3bd01b.mockapi.io/contacts/'
  );

  return data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(
    `https://64009edd29deaba5cb3bd01b.mockapi.io/contacts/${id}`
  );

  return response;
};

export const addContacts = async (data) => {
  const { data: response } = await axios.post(
    `https://64009edd29deaba5cb3bd01b.mockapi.io/contacts/`,
    data
  );

  return response;
};

// const contactsInstance = axios.create({ baseURL: `https://${API_KEY}.mockapi.io/contacts/`})
