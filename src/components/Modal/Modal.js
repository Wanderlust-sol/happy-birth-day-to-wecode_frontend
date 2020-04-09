import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import xButton from "img/x-mark-48.png";
import arrowRight from "img/arrow-right.png";

const settings = {
  infinite: false,
  speed: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  adaptiveHeight: true,
};

const ModalVote = ({ isVisible, setIsVisible, image }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isButtonEntered, setIsButtonEntered] = useState(false);
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLength, setImageLength] = useState(0);
  const imageRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    getImageSize();
    setImageLength(image.length);
  }, [image]);

  const modalShow = () => {
    if (!isEntered || isButtonEntered) {
      setIsVisible(!isVisible);
      setCurrentSlide(0);
      sliderRef.current.slickGoTo(0);
    }
  };

  const getImageSize = () => {
    const realWidth = imageRef.current.naturalWidth;
    const realHeight = imageRef.current.naturalHeight;
    setRealWidth(realWidth);
    setRealHeight(realHeight);
  };

  const moveSlide = (e) => {
    const btn = e.target.className.split(" ")[1];
    if (btn === "btn-left") {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    } else if (btn === "btn-right") {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const imageMapArr =
    image &&
    image.map((param, idx) => {
      return (
        <SliderLi Width={realWidth} Height={realHeight} key={idx}>
          <img src={param} ref={imageRef} />
        </SliderLi>
      );
    });

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
          <ModalArtsWrapper
            currentSlide={currentSlide}
            imageLength={imageLength}
          >
            <div
              className="btn btn-left btn-scroll btn-scroll-left"
              onClick={(event) => moveSlide(event)}
            />
            <div
              className="btn btn-right btn-scroll btn-scroll-right"
              onClick={(event) => moveSlide(event)}
            />
            <ModalArts>
              <Slider {...settings} ref={sliderRef}>
                {imageMapArr}
              </Slider>
            </ModalArts>
          </ModalArtsWrapper>
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
  top: 0;
  left: 0;
`;

const Background = styled.div`
  z-index: 1;
  opacity: 0.8;
  background: #000000;

  width: 100%;
  height: 100%;

  position: absolute;
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
  justify-content: center;
  flex-direction: column;

  overflow: hidden;

  border-bottom: solid 2.3px #000000;

  .slick-slide {
    display: flex;
    justify-content: center;
    background-color: black;
  }
`;

const ModalArtsWrapper = styled.div`
  overflow: hidden;
  position: relative;

  .btn {
    z-index: 10;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    border-radius: 50%;

    &-left {
      left: 30px;
      display: ${(props) => {
        return props.currentSlide === 0 ? "none" : "inline-block";
      }};
      background: url("https://res.kurly.com/pc/service/main/1908/btn_prev_default.png?v=1")
        no-repeat 50% 50%;
    }

    &-right {
      right: 30px;
      display: ${(props) => {
        return props.currentSlide === props.imageLength - 1
          ? "none"
          : "inline-block";
      }};
      background: url("https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1")
        no-repeat 50% 50%;
    }
  }
`;

const SliderLi = styled.div`
  background: black;
  width: 900px;
  height: 563px;

  display: flex;
  justify-content: center;

  img {
    width: ${(props) => (props.Width > props.Height ? "100%" : props.Width)};
    height: ${(props) => (props.Height >= props.Width ? "100%" : props.Height)};
  }
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
  width: 17px;
  height: 23px;
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
    text-align: center;
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
