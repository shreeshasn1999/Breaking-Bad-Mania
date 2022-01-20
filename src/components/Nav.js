import React from "react";
import styled from "styled-components";
const Nav_con = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Anch = styled.a`
  font-size: 1rem;
  text-decoration: none;
  background-color: black;
  color: white;
  display: inline-block;
  border: none;
`;
class Nav extends React.Component {
  render() {
    return (
      <Nav_con>
        <Anch>Characters</Anch>
        <Anch>Help</Anch>
        <Anch>About</Anch>
      </Nav_con>
    );
  }
}
export default Nav;
