import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Image = styled.img`
  height: 80%;
  width: 100%;
  display: inline-block;
  // border-bottom: solid 5px black;
`;
const LoginBackground = styled.div`
  & {
    position: relative;
    background-color: black;
    transform: scale(1);
    z-index: 1;
    // border: solid 2px black;
  }
  &:hover {
    transform: scale(1.1);
    z-index: 10;
    background-color: black;

    transition-duration: 100ms;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: -12.5%;
    width: 12%;
    padding-top: 11%;
    background-color: #c9c9c9;
    transform: translate(50%, -50%) rotate(45deg);
    transition-duration: 500ms;
    // border-right: solid 2px black;
  }
  &:hover::before {
    width: 0;
    transition-delay: 100ms;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -8%;
    right: -1.5%;
    width: 12%;
    padding-top: 11%;
    background-color: #c9c9c9;
    transform: translate(50%, -50%) rotate(45deg);
    transition-duration: 500ms;
    // border-right: solid 2px black;
  }
  &:hover::after {
    width: 0;
    transition-delay: 100ms;
  }
`;
const Para = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 20%;
`;
class Char_card extends React.Component {
  gotocharpage = () => {
    this.props.push(`/character/${this.props.char_details.name}`);
  };
  render() {
    return (
      <LoginBackground>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            // border: "solid 2px black",
          }}
          to={{
            pathname: `/character/${this.props.char_details.name}`,
            state: this.props.index,
          }}
        >
          <Image
            src={this.props.char_details.img}
            alt={this.props.char_details.name}
          ></Image>

          <Para>{this.props.char_details.name}</Para>
        </Link>
      </LoginBackground>
    );
  }
}
export default Char_card;
