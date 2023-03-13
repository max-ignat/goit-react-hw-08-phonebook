import { getUserEmail, isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { WraperDiv } from './HomePage.styled';
const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const  email  = useSelector(getUserEmail);
  return (
      <WraperDiv >
          
      {!isLogin ? (
        <h3 >
          Welcome! Please login to your account or register to be able to use
          the contact book
        </h3>
      ) : (
        <h3 >
          Congratulations! You are logged in as{' '}
          <span >{email}</span>. You have access to all
          the contacts you saved before, as well as many other options, such as
          adding new contacts, searching for a contact by name or phone number,
          and deleting old contacts.
        </h3>
      )}
    </WraperDiv>
  );
};

export default HomePage;
