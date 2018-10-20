import React, { Component } from "react";

import Register from "./container/Register";
import Detail from "./container/Detail";

class Index extends Component {
  constructor(props) {
    this.state = {
      showdetail: false
    };
  }

  changeDetails = () => {
    this.setState({ showdetail: true });
  };

  render() {
    this.state.details ? (
      <Detail />
    ) : (
      <Register navToDetails={this.changeDetails} />
    );
  }
}

export default Index;
