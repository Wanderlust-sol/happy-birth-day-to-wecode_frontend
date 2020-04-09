import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ModalVote from "components/Modal";

const ArtBox = ({ image }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <ModalVote
        image={[
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3barum.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum2.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum3.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum4.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum5.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum6.jpg",
          "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3thbarum7.jpg",
        ]}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <ArtContainer>
        <Art
          onClick={() => setIsVisible(!isVisible)}
          src={image}
          width="300"
          height="200"
        ></Art>
      </ArtContainer>
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
  position: relative;
`;

const ArtContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Art = styled.img`
  /* width: ${(props) => (props.Width > props.Height ? "100%" : props.Width)};
  height: ${(props) =>
    props.Height >= props.Width ? "100%" : props.Height}; */
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
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

const Vote = styled.div`
  width: 92px;
  height: 28px;
  border-radius: 2px;
  background-color: #1200ff;
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
