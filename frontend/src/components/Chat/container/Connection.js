import React, { Component } from "react";
import ConnectionP from "../presentational/Connection";
class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { name: "Jayson Ray", time: "2m", message: "Woot, Woot! It’s a match" },
        { name: "Jayson Ray", time: "2m", message: "Woot, Woot! It’s a match" },
        { name: "Jayson Ray", time: "2m", message: "Woot, Woot! It’s a match" }
      ]
    };
  }
  render() {
    return <ConnectionP messages={this.state.messages} />;
  }
}

export default Connection;
