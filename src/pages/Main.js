import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import ArtBox from "components/ArtBox";
import anivimg from "../img/title@2x.png";
import { API_URL } from "config.js";

const artInfo = {
  "/poem3": {
    url: 2,
    data: "three_rows",
  },
  "/pic": {
    url: 1,
    data: "picture",
  },
  "/poem": {
    url: 3,
    data: "poems",
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    let activeTab = props.location.pathname;

    if (props.location.pathname === "/") {
      activeTab = "/poem3";
    }

    this.state = {
      activeTab,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { activeTab } = this.state;
    const result = await axios(`${API_URL}/artwork/${artInfo[activeTab].url}`);

    this.setState({
      data: result.data[artInfo[activeTab].data],
    });
  }

  toPage = (path) => {
    this.setState({
      activeTab: path,
    });

    this.props.history.push(path);
  };

  render() {
    const { activeTab, data } = this.state;
    return (
      <MainWrap>
        <MainAniv>
          <img src={anivimg} />
        </MainAniv>
        <MainUl>
          <Mainli
            selected={activeTab === "/poem3"}
            onClick={() => this.toPage("/poem3")}
          >
            삼 행 시
          </Mainli>
          <Mainli
            selected={activeTab === "/pic"}
            onClick={() => this.toPage("/pic")}
          >
            그 림
          </Mainli>
          <Mainli
            selected={activeTab === "/poem"}
            onClick={() => this.toPage("/poem")}
          >
            시
          </Mainli>
          <Link to="/result">
            <ResultButton>결과 보기</ResultButton>
          </Link>
        </MainUl>

        <Wrap>
          {data.map((el) => (
            <ArtBox info={el} />
          ))}
        </Wrap>
      </MainWrap>
    );
  }
}

export default Main;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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

const MainUl = styled.ul`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding-left: calc(10% - 90px);
`;

const Mainli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  width: 250px;
  height: 50px;
  text-align: center;
  color: ${({ selected }) => (selected ? "white" : "rgba(0,0,0,0.4)")};
  background-color: ${({ selected }) =>
    selected ? "black" : "rgba(0,0,0,0.1)"};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 900;
  font-size: 21px;
`;

const Wrap = styled.div`
  text-align: center;
`;

const ResultButton = styled.div`
  position: absolute;
  right: calc(10% - 90px);
  bottom: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
