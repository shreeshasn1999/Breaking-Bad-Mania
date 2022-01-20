import React from "react";
import "./App.css";
import Header from "./Header";
import Para_text from "./Para_text";

import Character_list from "../Character_list";
import Char_layout from "./Char_layout";
import styled from "styled-components";

const Final_app = styled.div`
  * {
    box-sizing: border-box;
    // margin: 0;
    font-family: sans-serif;
  }
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

class App extends React.Component {
  render() {
    return (
      <Final_app>
        <Header />
        <Para_text></Para_text>
        <Char_layout
          char_details={Character_list}
          push={this.props.history.push}
        />
      </Final_app>
    );
  }
}
export default App;
