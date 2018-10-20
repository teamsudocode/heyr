import React, { Component } from "react";
import DetailP from "../presentational/Detail";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: ["Cricket", "Politics", "Sports"]
    };
  }
  render() {
    return <DetailP interests={this.state.interests} />;
  }
}

export default Detail;
