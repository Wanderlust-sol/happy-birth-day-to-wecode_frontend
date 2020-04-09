import React from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";

const ArtList = () => {
  return (
    <>
      <Container>
        <List>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          <ArtBox></ArtBox>
          {/* {x.map(item => (
            <ArtBox item={item} />
          ))} */}
        </List>
      </Container>
    </>
  );
};

export default ArtList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  width: 1440px;
`;
