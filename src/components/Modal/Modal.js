import React, { useState } from "react";
import styled from "styled-components";
import xButton from "img/x-mark-48.png";
import arrowRight from "img/arrow-right.png";

const ModalVote = ({ isVisible, setIsVisible, image }) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isButtonEntered, setIsButtonEntered] = useState(false);

  const modalShow = () => {
    console.log(isEntered);
    (!isEntered || isButtonEntered) && setIsVisible(!isVisible);
  };

  // const imageMapArr = image.map((param, idx) => {
  //   return (
  //     <li key={idx}>
  //       <image src={param} />
  //     </li>
  //   );
  // });

  return (
    <>
      <ModalContainer onClick={modalShow} isVisible={isVisible}>
        <Background />
        <ModalMain
          onMouseEnter={() => setIsEntered(!isEntered)}
          onMouseLeave={() => setIsEntered(!isEntered)}
        >
          <CloseButton
            onClick={modalShow}
            onMouseEnter={() => setIsButtonEntered(!isButtonEntered)}
            onMouseLeave={() => setIsButtonEntered(!isButtonEntered)}
          />
          <ModalArts>{/* <ul>{image && imageMapArr}</ul> */}</ModalArts>
          <ModalBottom>
            <BottomLeft>
              <ArrowRight />
              <CreatorName>
                <span>6기 오종택</span>
              </CreatorName>
            </BottomLeft>
            <BottomRight>
              <span>투표하기</span>
            </BottomRight>
          </ModalBottom>
        </ModalMain>
      </ModalContainer>
    </>
  );
};

export default ModalVote;

const ModalContainer = styled.div`
  z-index: 3;

  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 64px;
  left: 0;
`;

const Background = styled.div`
  z-index: 1;
  opacity: 0.8;
  background: #000000;

  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;
`;

const ModalMain = styled.div`
  z-index: 2;

  margin: 0 auto;
  position: relative;

  border-radius: 4px;
  border: solid 2.3px #000000;
  background-color: #f6f4f1;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background: transparent url(${xButton}) no-repeat center center;
  background-size: cover;

  position: absolute;
  top: -30px;
  right: 0;
`;

const ModalArts = styled.ul`
  width: 900px;
  height: 563px;

  display: flex;
  flex-direction: row;

  overflow: hidden;

  border-radius: 4px;
  border: solid 2.3px #000000;
`;

const ModalBottom = styled.div`
  height: 63px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-left: 26px;

  cursor: default;
`;

const ArrowRight = styled.div`
  width: 10px;
  height: 13px;
  background: transparent url(${arrowRight}) no-repeat center center;
  background-size: cover;
`;

const CreatorName = styled.div`
  width: 75px;
  height: 22px;
  background-color: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;

  span {
    font-family: NotoSansCJKkr;
    font-size: 15px;
    font-weight: 900;
    color: #ffffff;
  }
`;

const BottomRight = styled.div`
  width: 92px;
  height: 28px;
  border-radius: 2px;
  background-color: #1200ff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 26px;

  cursor: pointer;

  span {
    font-family: NotoSansCJKkr;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
  }
`;
