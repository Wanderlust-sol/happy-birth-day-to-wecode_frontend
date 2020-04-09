import React, { Component } from "react";
import styled from "styled-components";
import pattern from "../../images/pattern-bg@2x.png";
import contributorImg from "../../images/contributors.jpg";

export class Contributor extends Component {
  render() {
    return (
      <ContributorPage pattern={pattern}>
        <Header>
          <div />
        </Header>
        <Body>
          <Title>
            <span className="title">Happy 1st B-Day</span>
            <span className="sub-title">Contributors</span>
          </Title>
          <ContributorImg />
        </Body>
      </ContributorPage>
    );
  }
}

export default Contributor;

const ContributorPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${pattern});
  * {
    box-sizing: border-box;
  }
`;

const Header = styled.div`
  height: 64px;
  background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_logo.png");
    width: 140px;
    height: 38px;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Body = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 50px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  position: relative;
  .title {
    color: #000;
    padding: 5px;
  }
  .sub-title {
    color: #fff;
    background-color: #000;
    padding: 5px;
  }
`;

const ContributorImg = styled.div`
  background-image: url(${contributorImg});
  margin: 30px auto 0;
  border-radius: 10px;
  width: 800px;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
`;
