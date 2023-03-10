import { useSelector } from "react-redux"
import { userName } from "redux/auth/auth-selectors"
import { Button } from "react-bootstrap";

const NavBarUser = () => {
    const name = useSelector(userName);
    // console.log('name', name)
    const handleLogOut = () => {
        console.log('Log out done')
        }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          position: 'absolute',
          top: 10,
          right: 20,
        }}
      >
        <p style={{ fontSize: 16, fontWeight: 'bold', padding: 10, margin: 0 }}>
          {' '}
          Welcome, {name}
        </p>
        <Button type="submit" variant="outline-warning" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    );
    

}
export default NavBarUser;