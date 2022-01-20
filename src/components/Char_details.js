import React from "react";
import styled from "styled-components";
import Character_list from "../Character_list";
import Header from "./Header";
import { makestring } from "./helper";
const Container = styled.div`
  width: 100%;
  // background-color: #a9a9a9;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Para = styled.p`
  font-size: 1.5rem;
  // font-family: sans;
`;

const Image_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 25rem;
  width: 20rem;
`;

const Char_detail_grid = styled.div`
  width: 80%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem auto;
  border: solid 5px black;
  align-items: center;
  background-color: white;
  position: relative;
  &::before {
    text-transform: uppercase;
    content: "Character Info";
    font-size: 2rem;
    position: absolute;
    padding: 0 1rem;
    top: -1.5rem;
    left: 35%;
    color: #369457;
    background-color: white;
  }
`;

class Char_details extends React.Component {
  gotomainpage = () => {
    this.props.history.push(`/`);
  };

  render() {
    const char_id = this.props.location.state;
    let {
      name,
      birthday,
      occupation,
      image,
      status,
      nickname,
      portrayed,
      category,
      better_call_saul_appearance,
    } = Character_list[char_id];
    image = Character_list[char_id].img;
    if (better_call_saul_appearance == "") {
      better_call_saul_appearance = "none";
    }
    return (
      <Container>
        <Header></Header>
        <Char_detail_grid>
          <Image_container>
            <Image src={image} alt={name}></Image>
          </Image_container>
          {/* <button onClick={this.gotomainpage}>Character list</button> */}
          <List>
            <li>
              <Para>
                <span>Name: </span> {name}
              </Para>
            </li>
            <li>
              <Para>
                <span>Birthday: </span> {birthday}
              </Para>
            </li>
            <li>
              <Para>
                <span>Occupation: </span> {occupation}
              </Para>
            </li>
            <li>
              <Para>
                <span>Status: </span> {status}
              </Para>
            </li>
            <li>
              <Para>
                <span>Nickname: </span> {nickname}
              </Para>
            </li>
            <li>
              <Para>
                <span>Portrayed: </span> {portrayed}
              </Para>
            </li>
            <li>
              <Para>
                <span>Category: </span> {category}
              </Para>
            </li>
            <li>
              <Para>
                <span>Better Call Saul Appearance: </span>
                {better_call_saul_appearance}
              </Para>
            </li>
          </List>
        </Char_detail_grid>
      </Container>
    );
  }
}
export default Char_details;
