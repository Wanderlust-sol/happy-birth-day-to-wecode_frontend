import React, { Component } from "react";
import styled, { css } from "styled-components";

class Main extends Component {
  render() {
    return (
      <>
        <MainWrap>
          <MainTitle>a</MainTitle>
        </MainWrap>
      </>
    );
  }
}

export default Main;

const MainWrap = styled.div`
  width: 1440px;
`;

const MainTitle = styled.div`
  margin: 0 auto;
  width: 1440px;
`;
