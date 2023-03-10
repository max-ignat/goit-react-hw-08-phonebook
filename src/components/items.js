import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: 'My Phone Book',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Contacts',
    link: '/contacts',
  },
  {
    id: nanoid(),
    text: 'Register',
    link: '/register',
  },
  {
    id: nanoid(),
    text: 'Login',
    link: '/login',
  },
];
export default items;