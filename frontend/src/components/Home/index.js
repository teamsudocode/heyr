import React, { Fragment, PureComponent } from "react";
import { Route, Router, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Discover from "../Discover";
import Explore from "../Explore";
import Chat from "../Chat";
import BottomNav from "../BottomNav";
import Conversation from "../Chat/container/Conversation";

export const history = createHistory();

class Index extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Discover} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/conversation" component={Conversation} />
          </Switch>
          <BottomNav />
        </Fragment>
      </Router>
    );
  }
}

export default Index;
