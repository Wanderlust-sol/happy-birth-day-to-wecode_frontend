import React, { Component } from "react";
import styled, { css } from "styled-components";
import backimg from "../img/pattern-bg.svg";
import anivimg from "../img/title@2x.png";

class Main extends Component {
  render() {
    return (
      <MainWrap>
        <MainTitle>> wecode</MainTitle>
        <MainBody>
          <MainAniv src={anivimg}></MainAniv>
          <MainTabWrap>
            <MainTabThreePoem></MainTabThreePoem>
            <MainTabPicture></MainTabPicture>
            <MainTabPoem></MainTabPoem>
          </MainTabWrap>
        </MainBody>
      </MainWrap>
    );
  }
}

export default Main;

const MainWrap = styled.div`
  // width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const MainTitle = styled.div`
  width: 100%;
  height: 64px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
  font-weight: 700;
  font-size: 23px;
`;

const MainBody = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${backimg});
`;

const MainAniv = styled.img`
  position: absolute;
  width: 320px;
  // height: 210px;
  left: 50%;
  top: 99px;
  transform: translateX(-50%);
`;

const MainTabWrap = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const MainTabThreePoem = styled.div``;

const MainTabPicture = styled.div``;

const MainTabPoem = styled.div``;
