import React, { Component } from "react";
import MessageP from "../presentational/Messages";
class Message extends Component {
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
    return <MessageP messages={this.state.messages} />;
  }
}

export default Message;
