import { Link, NavAuthDiv} from './NavBarAuth.styled';

const NavbarAuth = () => {
  return (
    <NavAuthDiv>
      <Link to="/register">
        <p
          style={{ fontSize: 16, fontWeight: 'bold', padding: 10, margin: 0 }}
        >Register</p>{' '}
        
      </Link>
      |
      <Link to="/login">
        <p
          style={{ fontSize: 16, fontWeight: 'bold', padding: 10, margin: 0 }}
        >Login</p>{' '}
        
      </Link>
    </NavAuthDiv>
  );
};

export default NavbarAuth;
