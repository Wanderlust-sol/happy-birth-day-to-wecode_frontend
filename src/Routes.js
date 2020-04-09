import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
// import files
import Main from "./pages/Main";
import ArtList from "components/ArtList";
import ModalVote from "./components/Modal";
import Contributor from "./pages/Contributor";
import Footer from "components/Footer";
import Result from "pages/Result";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/modal" component={ModalVote} />
          <Route exact path="/contributor" component={Contributor} />
          <Route exact path="/" component={Main} />
          <Route exact path="/art" component={ArtList} />
          <Route exact path="/modal" component={ModalVote} />
          <Route exact path="/result" component={Result} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
