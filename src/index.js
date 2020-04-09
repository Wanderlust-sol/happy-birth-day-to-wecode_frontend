import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
