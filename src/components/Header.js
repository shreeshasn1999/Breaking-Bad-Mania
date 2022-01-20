import React from "react";
import styled from "styled-components";
// import Nav from "./Nav";

const Head = styled.h1`
  font-size: 2rem;
  // background-color: black;
  color: black;
  display: inline-block;
`;

const Head_bar = styled.div`
  display: flex;
  // background-color: linear-gradient(to right, #369457, #032202);
  padding: 1rem;
  background-color: white;
  gap: 1rem;
`;

const Span = styled.span`
  // color: #29773e;
`;

class Header extends React.Component {
  render() {
    return (
      <Head_bar>
        <Head>
          <Span>Br</Span>eaking <Span>Ba</Span>d Mania
        </Head>
        {/* <Nav /> */}
      </Head_bar>
    );
  }
}

export default Header;
