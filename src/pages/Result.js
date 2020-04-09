import React, { Component } from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";

class Result extends Component {

  state = {
    drawing: []
  };

  componentDidMount() {
    fetch('http://10.58.1.79:8000/vote/result/2').then(res => res.json()).then(res => {
      console.log(res)
      this.setState({ drawing: res.results })
    })
  }

  render() {
    return (
      <Page>
        <Section>
          <Title>삼행시 부문 순위</Title>
          <div>
          </div>
        </Section>
        <Section>
          <Title>그림 부문 순위</Title>

          {this.state.drawing.map((el) => <ArtBox info={el} vote={false} /> )}
        </Section>
        <Section>
          <Title>시 부문 순위</Title>
        </Section>
      </Page>
    );
  }
}

export default Result;

const Page = styled.div`
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const Title = styled.p`
    padding-bottom: 15px;
    border-bottom: 1px solid black;
    font-size: 21px;
    font-weight: bold;
`;
