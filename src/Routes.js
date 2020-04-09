import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import ModalVote from "./components/Modal";
import Contributor from "./pages/Contributor";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/modal" component={ModalVote} />
          <Route exact path="/contributor" component={Contributor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
