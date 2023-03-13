import { useSelector, useDispatch } from "react-redux"
import { getUser } from "redux/auth/auth-selectors"
import { Button } from "react-bootstrap";
import { logout } from "redux/auth/auth-operations";
const UserMenu = () => {
  const name = useSelector(getUser);
  const dispatch = useDispatch(); // console.log('name', name)
  const handleLogOut = () => {
    dispatch(logout());
    console.log('Log out done');
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        margin: 'auto',
      }}
    >
      <p
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          padding: 10,
          margin: 0,
        }}
      >
        Welcome, {name}
      </p>
      <Button type="submit" variant="outline-warning" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
};
export default UserMenu;