import React, { Component } from "react";
import styled, { css } from "styled-components";
import backimg from "../img/pattern-bg.svg";
import anivimg from "../img/title@2x.png";
import Artlist from "../components/ArtList";

class Main extends Component {
  constructor(props) {
    super(props);
    if (
      (props.location.pathname === "/") |
      (props.location.pathname === "/poem3")
    ) {
      this.state = {
        activeState: "/poem3",
      };
    } else
      this.state = {
        activeState: props.location.pathname,
      };
  }

  toPoem3 = () => {
    this.setState({
      activeState: "/poem3",
    });
    this.props.history.push("/poem3");
  };

  toPic = () => {
    this.setState({
      activeState: "/pic",
    });
    this.props.history.push("/pic");
  };

  toPoem = () => {
    this.setState({
      activeState: "/poem",
    });
    this.props.history.push("/poem");
  };

  render() {
    return (
      <MainWrap>
        <MainBody>
          <MainAniv>
            <img src={anivimg} />
          </MainAniv>
          <UlWrap>
            <MainUl>
              {this.state.activeState === "/poem3" ? (
                <Mainli>
                  <a class="poem3Selected" onClick={this.toPoem3}>
                    삼 행 시
                  </a>
                </Mainli>
              ) : (
                <Mainli>
                  <a class="poem3" onClick={this.toPoem3}>
                    삼 행 시
                  </a>
                </Mainli>
              )}
              {this.state.activeState === "/pic" ? (
                <Mainli>
                  <a class="picSelected" onClick={this.toPic}>
                    그 림
                  </a>
                </Mainli>
              ) : (
                <Mainli>
                  <a class="pic" onClick={this.toPic}>
                    그 림
                  </a>
                </Mainli>
              )}
              {this.state.activeState === "/poem" ? (
                <Mainli>
                  <a class="poemSelected" onClick={this.toPoem}>
                    시
                  </a>
                </Mainli>
              ) : (
                <Mainli>
                  <a class="poem" onClick={this.toPoem}>
                    시
                  </a>
                </Mainli>
              )}
            </MainUl>
          </UlWrap>
          {this.state.activeState === "/poem3" ? (
            <MainTabWrap>
              <MainTabThreePoem>
                <Artlist></Artlist>
              </MainTabThreePoem>
            </MainTabWrap>
          ) : (
            <div></div>
          )}
          {this.state.activeState === "/pic" ? (
            <MainTabWrap>
              <MainTabPicture>그림</MainTabPicture>
            </MainTabWrap>
          ) : (
            <div></div>
          )}
          {this.state.activeState === "/poem" ? (
            <MainTabWrap>
              <MainTabPoem>시</MainTabPoem>
            </MainTabWrap>
          ) : (
            <div></div>
          )}
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

const Header = styled.div`
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
  img {
    width: 150px;
  }
`;
const MainTitleImg = styled.img`
  cursor: pointer;
`;

const MainBody = styled.div`
  width: 100%;
  height: 2000px;
  background-image: url(${backimg});
`;

const MainAniv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 50px;
  img {
    width: 320px;
  }
`;

const MainTabWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const MainTabThreePoem = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  height: 1500px;
`;

const MainTabPicture = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  height: 1500px;
`;

const MainTabPoem = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  height: 1500px;
`;

const UlWrap = styled.div`
  min-width: 300px;
  max-width: 1440px;
  margin: 0 auto;
`;

const MainUl = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Mainli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 250px;
  height: 50px;
  text-align: center;
  a.poem3 {
    font-weight: 900;
    font-size: 21px;
    color: black;
  }
  a.poem3Selected {
    background-color: black;
    color: white;
    font-weight: 900;
    font-size: 21px;
    width: 250px;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid black;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: linear-gradient(#000000, #323232);
  }
  a.pic {
    font-size: 21px;
    color: black;
    font-weight: 900;
  }
  a.picSelected {
    font-size: 21px;
    color: white;
    font-weight: 900;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 250px;
    height: 50px;
    border: 1px solid black;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: linear-gradient(#000000, #323232);
  }
  a.poem {
    font-size: 21px;
    color: black;
    font-weight: 900;
  }
  a.poemSelected {
    font-size: 21px;
    color: white;
    font-weight: 900;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 250px;
    height: 50px;
    border: 1px solid black;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    background: linear-gradient(#000000, #323232);
  }
`;
