import { getUserEmail, isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { WraperDiv } from './HomePage.styled';
const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const  email  = useSelector(getUserEmail);
  return (
    <WraperDiv>
      {!isLogin ? (
        <div style={{}}>
          <h1 style={{ textAlign: 'center', marginTop: 5 }}>
            Welcome dear user!
          </h1>
          <h2 style={{ fontSize: 18, textAlign: 'center', marginTop: 5 }}>
            To use all the preferences of our 'Phone Book App' please sign up.
          </h2>
        </div>
      ) : (
        <h2 style={{ fontSize: 18, textAlign: 'center', marginTop: 5 }}>
          Congratulations! You`ve` logged in as{' '}
          <span style={{ textDecoration: 'underline', fontSize: 20 }}>
            {email}
          </span>
          . Now you have full acces to your 'Phone Book App'
        </h2>
      )}
    </WraperDiv>
  );
};

export default HomePage;
