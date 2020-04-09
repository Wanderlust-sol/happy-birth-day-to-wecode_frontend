import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ArtBox = (props) => {
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [popup, setPopup] = useState(false);
  const imageRef = useRef(null);
  const { artist, image_urls, batch } = props.info;

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
          src={image_urls[0]}
          ref={imageRef}
          width="300"
          height="200"
          Width={realWidth}
          Height={realHeight}
        ></Art>
      </ArtContainer>
      <Content pop={popup}>
        <ContentTitle>
          <Name>{batch}기 {artist}</Name>
          <Vote onClick={() => setPopup(true)}>투표하기</Vote>
        </ContentTitle>
        <PopupContainer>
          <Button>
            <Yes>투표할래!</Yes>
            <No onClick={() => setPopup(false)}>다른거 할래!</No>
          </Button>
        </PopupContainer>
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
  overflow: hidden;
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
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  left: ${(props) => (props.pop ? "-300px" : "0px")};
  transition: left 1s ease-in-out;
`;

const ContentTitle = styled.div`
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

const Button = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
  font-size: 13px;
  font-weight: bold;
`;

const Yes = styled.div`
  width: 92px;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27ae60;
  color: white;
  cursor: pointer;
`;

const No = styled.div`
  width: 92px;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c0392b;
  color: white;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 300px;
`;
