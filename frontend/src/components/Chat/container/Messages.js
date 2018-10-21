import React, { Component } from "react";
import MessageP from "../presentational/Messages";
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { name: "Jayson Ray", time: "2m", message: "Woot, Woot! It’s a match" },
        { name: "James Taylor", time: "12m", message: "You: Yeah, so I will be travelling to Canada" },
        { name: "Philip O’Dwyer", time: "20m", message: "I have been to India once" }
      ]
    };
  }
  render() {
    return <MessageP messages={this.state.messages} />;
  }
}

export default Message;
