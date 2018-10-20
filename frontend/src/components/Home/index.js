import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Discover from "../Discover";
import Explore from "../Explore";
import Chat from "../Chat";

import BottomNav from "../BottomNav";
const Index = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={Discover} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/chat" component={Chat} />
    </Switch>
    <BottomNav />
  </Fragment>
);
export default Index;
