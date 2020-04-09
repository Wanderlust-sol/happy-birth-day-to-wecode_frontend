import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import axios from "axios";
import ArtBox from "components/ArtBox";
import anivimg from "../img/title@2x.png";
import { API_URL } from 'config.js';

const artInfo = {
  '/poem3': {
    url: 2,
    data: '삼행시'
  },
  '/pic': {
    url: 1,
    data: '그림'
  },
  '/poem': {
    url: 3,
    data: '시'
  }
};

class Main extends Component {

  constructor(props) {
    super(props);

    let activeTab = props.location.pathname;

    if (props.location.pathname === "/") {
      activeTab = '/poem3'
    }

    this.state = {
      activeTab,
      data: []
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
    const result = await axios(`http://localhost:8080/artwork/${artInfo[activeTab].url}`);

    this.setState({
      data: result.data[artInfo[activeTab].data]
    })
  }

  toPage = path => {
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
          <img src={anivimg}/>
        </MainAniv>
        <MainUl>
          <Mainli selected={activeTab === "/poem3"} onClick={() => this.toPage('/poem3')}>
            삼 행 시
          </Mainli>
          <Mainli selected={activeTab === "/pic"} onClick={() => this.toPage('/pic')}>
            그 림
          </Mainli>
          <Mainli selected={activeTab === "/poem"} onClick={() => this.toPage('/poem')}>
            시
          </Mainli>
          <Link to="/result"><ResultButton>
            결과 보기
          </ResultButton></Link>
        </MainUl>

        <Wrap>
          {data.map(el => <ArtBox info={el}/>)}
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
  //max-width: 800px;
  //margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Mainli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 250px;
  height: 50px;
  text-align: center;
  background-color:  ${({ selected }) => selected ? 'black' : ''};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
   
    font-weight: 900;
    font-size: 21px;
    color: ${({ selected }) => selected ? 'white' : 'black'};
`;

const Wrap = styled.div`
  text-align: center;
`;

const ResultButton = styled.div`
   position: absolute;
   right: 0;
   bottom: 5px;
   padding: 10px 20px;
   border-radius: 5px;
   cursor: pointer;
   background-color: black;
   color: white;
`;
