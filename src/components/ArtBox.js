import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "config";
import styled from "styled-components";
import medal from "img/medal.png";

const ArtBox = props => {
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [popup, setPopup] = useState(false);
  const imageRef = useRef(null);
  const { vote, info, top } = props;
  const { artist, image_urls, batch, artwork_id } = info || { artist: "오종택", image_urls: [], batch: 6 };

  const handleVote = async() => {
    // alert("투표되었습니다~! 땡큐 베리 마취");
    // setPopup(false);
    try {
      const code = localStorage.getItem('user') || '';

      const res = await axios.post(`${API_URL}/vote`, {
        artwork: artwork_id,
      });

      localStorage.setItem('user', res.data.code);
      alert("소중한 1표 땡큐요~😘");
      setPopup(false);
    } catch (err) {
      console.log(err);
    }
  };

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
        {top && <Medal><span>{top}</span></Medal>}
        <Art
          src={image_urls[0]}
          ref={imageRef}
          // width="300"
          // height="200"
          // Width={realWidth}
          // Height={realHeight}
        ></Art>
      </ArtContainer>
      {vote !== false && (
        <Hidden>
          <Content pop={popup}>
            <ContentTitle>
              <Name>{batch}기 {artist}</Name>
              <Vote onClick={() => setPopup(true)}>투표하기</Vote>
            </ContentTitle>
            <PopupContainer>
              <Button>
                <Yes onClick={handleVote}>투표할래!</Yes>
                <No onClick={() => setPopup(false)}>다른거 할래!</No>
              </Button>
            </PopupContainer>
          </Content>
        </Hidden>
      )}
    </Container>
  );
};

export default ArtBox;

const Container = styled.div`
  width: 30%;
  min-width: 300px;
  margin: 15px;
  border: solid 1px #47474b;
  border-radius: 4px;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  //overflow: hidden;
`;

const Medal = styled.div`
  position: absolute;
  background: url(${medal}) no-repeat;
  width: 50px;
  height: 50px;
  background-size: 100%;
  text-align: center;
  top: -10px;
  left: -20px;
  padding-top: 8px;
  
  span {
border-radius: 50%;
    display: inline-block;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 4px;
    left: 12px;
    line-height: 29px;
    background-color: #f4ea2b;
    color: #ff7700;
  }
`;

const ArtContainer = styled.div`
  position: relative;
  //width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
`;

const Art = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Content = styled.div`
  width: 100%;
  transform: translateX(${props => (props.pop ? "-100%" : "0px")});
  transition: transform 0.5s ease-in-out;
  //overflow: hidden;
`;

const ContentTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  background-color: #101820;
  color: white;
`;

const Hidden = styled.div`
  overflow: hidden;
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
 background-color: #1200ff;
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
  cursor: pointer;
  border: 1px solid black;
    color: black;
`;

const PopupContainer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 100%;
  top: 0;
  //left: 300px;
`;
