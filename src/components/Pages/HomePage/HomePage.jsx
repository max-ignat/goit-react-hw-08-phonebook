// import { isUserLogin } from 'redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';
// import { getUser } from 'redux/auth/auth-selectors';
const HomePage = () => {
//   const isLogin = useSelector(isUserLogin);
//   const  name  = useSelector(getUser);
  return (
      <>
          <h1>Здрасте</h1>
      {/* {!isLogin ? (
        <h1 >
          Welcome! Please login to your account or register to be able to use
          the contact book
        </h1>
      ) : (
        <h1 >
          Congratulations! You are logged in as{' '}
          <span >{name}</span>. You have access to all
          the contacts you saved before, as well as many other options, such as
          adding new contacts, searching for a contact by name or phone number,
          and deleting old contacts.
        </h1>
      )} */}
    </>
  );
};

export default HomePage;
