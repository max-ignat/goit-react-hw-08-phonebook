import styled from "styled-components";
import { Spinner } from 'react-bootstrap';

export const Box = styled.div`
position: relative;
background-color:azure;
height: 100vh ;


`


export const MySpinner = styled(Spinner)`
position: absolute;
  top: 50%; /* смещение на 50% от верхнего края родительского элемента */
  left: 50%; /* смещение на 50% от левого края родительского элемента */
  transform: translate(-50%, -50%);
`