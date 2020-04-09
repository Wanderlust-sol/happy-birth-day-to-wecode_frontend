import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalVote = () => {
  return (
    <>
      <ModalContainer>
        <ModalMain></ModalMain>
      </ModalContainer>
    </>
  );
};

export default ModalVote;

const ModalContainer = styled.div`
  opacity: 0.8;
  background-color: #000000;

  width: 100vw;
  height: 100vh;

  position: relative;
`;

const ModalMain = styled.div`
  width: 900px;
  height: 630px;
  z-index: 1;

  margin: 0 auto;
  position: absolute;

  border-radius: 4px;
  border: solid 1px #47474b;
  background-color: #ffffff;
`;
