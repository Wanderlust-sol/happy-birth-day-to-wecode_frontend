import React from "react";
import styled from "styled-components";
import Image from "img/falsekind.png";

const ArtBox = () => {
  return (
    <Container>
      <Art src={Image}></Art>
      <Content>
        <Name>6기 오종택</Name>
        <Vote>투표하기</Vote>
      </Content>
    </Container>
  );
};

export default ArtBox;

const Container = styled.div`
  width: 300px;
  height: 250px;
  margin: 15px;
  border: solid 1px #47474b;
  border-radius: 4px;
  background-color: #ffffff;
  display: inline-block;
`;

const Art = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: -2px;
`;

const Content = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`;

const Name = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const Vote = styled.button`
  width: 92px;
  height: 28px;
  border-radius: 2px;
  background-color: #1200ff;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
`;
