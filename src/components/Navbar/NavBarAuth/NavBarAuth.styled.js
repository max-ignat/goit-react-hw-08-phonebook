import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;
  color: #000;

  &.active {
    color: rgba(255, 255, 255, 0.75);
    font-weight: bold;
    /* background-color:red; */
  }
  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const NavAuthDiv = styled.div`
  /* background-color: red; */
  display:flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 10px;
  right: 20px;
        
`;

// style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignContent: 'center',
//           position: 'absolute',
//           top: 10,
//           right: 20,
//         }}
