import React, { Component } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import ArtBox from "components/ArtBox";
import anivimg from "../img/title@2x.png";

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
    const result = await axios(`http://10.58.1.60:8000/vote/artwork/${artInfo[activeTab].url}`);

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
        <UlWrap>
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
          </MainUl>
        </UlWrap>

        <MainTabWrap>
          {data.map(el => <ArtBox info={el}/>)}
        </MainTabWrap>
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
  background-color:  ${({ selected }) => selected ? 'black' : ''};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
   
    font-weight: 900;
    font-size: 21px;
    color: ${({ selected }) => selected ? 'white' : 'black'};
`;
