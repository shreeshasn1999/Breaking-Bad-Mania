import React from "react";
import styled from "styled-components";
const H2 = styled.h2`
  font-size: 2.5rem;
`;

const Para = styled.p`
  font-size: 2rem;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const Span = styled.span`
  //    {
  //     box-sizing: border-box;
  //     padding: 10px;
  //     background: green;
  //     border: 3px solid #fff;
  //     width: 3rem;
  //     height: 3rem;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     font-size: 1.75rem;
  //     color: white;
  //     background: #46a08c; /* Old browsers */
  //     background: -webkit-linear-gradient(
  //       130deg,
  //       #46a08c 0%,
  //       #1c3f1d 100%,
  //       #303030 90%
  //     );
  //     background: -moz-linear-gradient(
  //       130deg,
  //       #46a08c 0%,
  //       #1c3f1d 100%,
  //       #303030 90%
  //     );
  //     background: -o-linear-gradient(
  //       130deg,
  //       #46a08c 0%,
  //       #1c3f1d 100%,
  //       #303030 90%
  //     );
  //     background: linear-gradient(130deg, #46a08c 0%, #1c3f1d 100%, #303030 90%);
  //     box-shadow: inset 0px 2px 2px rgba(50, 50, 50, 0.6);
  //   }
  //
  color: green;
`;
class Para_text extends React.Component {
  render() {
    return (
      <Div>
        <H2>
          Welcome to the <Span>Br</Span>eaking <Span>Ba</Span>d Mania!
        </H2>
        <Para>Click on your favorite character to see their details </Para>
      </Div>
    );
  }
}
export default Para_text;
