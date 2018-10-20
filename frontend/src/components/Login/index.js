import React, { Component } from "react";

import Register from "./container/Register";
import Detail from "./container/Detail";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showdetail: false
    };
  }

  navToDetails = () => {
    this.setState({ showdetail: true });
  };

  render() {
    if (this.state.showdetail) return <Detail />;
    else return <Register navToDetails={this.navToDetails} />;
  }
}

export default Index;
