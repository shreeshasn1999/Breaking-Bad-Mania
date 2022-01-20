import React from "react";
import styled from "styled-components";
import Char_card from "./Char_card";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  width: 90%;
  background-color: #c9c9c9;
  margin: 0 5%;
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    width: 90%;
    margin: 0 5%;
  }
  @media (min-width: 700px) and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    width: 90%;
    margin: 0 5%;
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    width: 90%;
    margin: 0 5%;
  } ;
`;

const Container = styled.div`
  display: flex;
  width : 100%
  justify-content: center;
  margin-top : 3rem ;
  background-color: #c9c9c9;

`;
class Char_layout extends React.Component {
  render() {
    return (
      <Container>
        <Grid>
          {Object.keys(this.props.char_details).map((key) => (
            <Char_card
              char_details={this.props.char_details[key]}
              key={key}
              index={key}
              push={this.props.push}
            ></Char_card>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default Char_layout;
