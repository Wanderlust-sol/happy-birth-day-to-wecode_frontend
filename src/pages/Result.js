import React, { Component } from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";

class Result extends Component {

  state = {
    drawing: [],
    poem: [],
    poem3: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/result/1').then(res => res.json()).then(res => {
      console.log(res)
      this.setState({ drawing: res.results.slice(0,3) })
    })

    fetch('http://localhost:8000/result/2').then(res => res.json()).then(res => {
      console.log(res)
      this.setState({ poem3: res.results.slice(0,3) })
    })

    fetch('http://localhost:8000/result/3').then(res => res.json()).then(res => {
      console.log(res)
      this.setState({ poem: res.results.slice(0,3) })
    })
  }

  render() {
    return (
      <Page>
        <Section>
          <Title>삼행시 부문 TOP 3</Title>

          {this.state.poem3.map((el) => <ArtBox info={el} vote={false} /> )}

        </Section>
        <Section>
          <Title>그림 부문 TOP 3</Title>

          {this.state.drawing.map((el) => <ArtBox info={el} vote={false} /> )}
        </Section>
        <Section>
          <Title>시 부문 TOP 3</Title>

          {this.state.poem.map((el) => <ArtBox info={el} vote={false} /> )}

        </Section>
      </Page>
    );
  }
}

export default Result;

const Page = styled.div`
  padding-top: 100px;
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
