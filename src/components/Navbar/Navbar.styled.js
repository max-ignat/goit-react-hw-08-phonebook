import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled.button`
  background-color: azure;
  text-decoration: none;
  color: red;
  display: inline-block;
  padding: 10px 15px;
  /* border: solid azure 1px; */
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const NavList = styled.ul`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */

  margin-left: 0;
  /* margin-top: 50px; */
  padding: 10px 15px;
  margin: auto;
  font-size: 20px;
  background-color: #0d6efd;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  /* list-style: none; */
  display: flex;
  width: 700px;
  border-radius: 10px;

  /* justify-content: center; */
`;
export const Ref = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.55);

  &.active {
    color: rgba(255, 255, 255, 0.99);
    font-weight: bold;
    /* background-color:red; */
  }
  &:hover {
    color: rgba(255, 255, 255, 0.99);
  }
`;