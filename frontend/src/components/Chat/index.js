import React, { Fragment, Component } from "react";
import HeadNav from "../HeadNav";
import Messages from "./container/Messages";
import Connection from "./container/Connection";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "messages"
    };
  }
  nav = active => {
    this.setState({ active });
  };
  render() {
    return (
      <Fragment>
        <HeadNav nav={this.nav} />
        {this.state.active === "messages" ? <Messages /> : <Connection />}
      </Fragment>
    );
  }
}

export default Index;
