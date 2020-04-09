import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
// import files
import Main from "./pages/Main";
import ArtList from "components/ArtList";
import ModalVote from "./components/Modal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/art" component={ArtList} />
          <Route exact path="/modal" component={ModalVote} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
