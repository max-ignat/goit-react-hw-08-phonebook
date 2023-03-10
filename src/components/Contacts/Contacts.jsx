import {
  ContactList,
  // Button,
  Contact,
  ContactData,
  ListTitle,
} from './Contacts.styled';
// import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
const Contacts = ({ contacts, onDeleteContact }) => {
//   console.log(contacts);
  // const contacts = useSelector(state => state.contacts);
  
    return (
      <div>
        <ListTitle>Your contacts</ListTitle>
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id}>
              <ContactData>
                {name}: <span> {number} </span>
              </ContactData>
              <Button
                style={{margin: 10,}}
                variant="outline-danger"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Danger
              </Button>
              {/* <Button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </Button> */}
            </Contact>
          ))}
        </ContactList>
      </div>
    );
};


// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default Contacts;
