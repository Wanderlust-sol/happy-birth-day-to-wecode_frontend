import React from "react";
import styled from "styled-components";

const ArtBox = () => {
  return (
    <Container>
      <Art></Art>
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
`;

const Art = styled.img`
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  width: 100%;
  height: 50px;
`;

const Name = styled.p`
  font-size: 13px;
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
