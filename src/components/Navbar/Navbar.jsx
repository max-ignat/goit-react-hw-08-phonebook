import items from 'components/items';
import {NavList, Ref } from "./Navbar.styled";
import UserMenu from './UserMenu';
// import { Title } from 'components/Form/Form.styled';
import NavBarAuth from './NavBarAuth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
const NavbaR = () => {
  const isLogin = useSelector(isUserLogin)
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
    const elements = filteredItems.map(({ id, text, link }) => (
      //   <NavItem key={id}>
      //     <Ref to={link}> {text} </Ref>
      // </NavItem>

    <Navbar bg=" #3f51b5" variant="dark" key={id} >
        <Container >
          <Nav className="me-auto">
            <Ref to={link}> {text} </Ref>
          </Nav>
        </Container>
      </Navbar>
    ));

    return (
      <>
        <NavList style={{ marginTop: 3 }}>
          {elements}
          {!isLogin && <NavBarAuth />}
          {isLogin && <UserMenu />}
        </NavList>
      </>
    );
  
  
}
export default NavbaR;