import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "img/falsekind.png";

const ArtBox = (props) => {
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const imageRef = useRef(null);

  const getImageSize = () => {
    const realWidth = imageRef.current.naturalWidth;
    const realHeight = imageRef.current.naturalHeight;
    setRealWidth(realWidth);
    setRealHeight(realHeight);
    console.log(realWidth, realHeight);
  };

  useEffect(() => {
    getImageSize();
  }, []);

  return (
    <Container>
      <ArtContainer>
        <Art
          src={Image}
          ref={imageRef}
          Width={realWidth}
          Height={realHeight}
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
`;

const ArtContainer = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Art = styled.img`
  width: ${(props) => (props.Width > props.Height ? "100%" : props.Width)};
  height: ${(props) => (props.Height >= props.Width ? "100%" : props.Height)};
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
