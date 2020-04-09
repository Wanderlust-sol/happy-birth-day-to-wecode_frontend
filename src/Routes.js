import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
// import files
import ModalVote from "./components/Modal";
import Main from "./pages/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/modal" component={ModalVote} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
