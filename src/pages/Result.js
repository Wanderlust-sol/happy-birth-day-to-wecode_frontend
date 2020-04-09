import React, { Component } from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";

class Main extends Component {
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
        </Section>
        <Section>
          <Title>시 부문 순위</Title>
        </Section>
      </Page>
    );
  }
}

export default Main;

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
