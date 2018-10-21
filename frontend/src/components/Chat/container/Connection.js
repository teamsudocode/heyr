import React, { Component } from "react";
import ConnectionP from "../presentational/Connection";
import luis from "../../../assets/luis.png";
import jessi from "../../../assets/jessi.png";

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { name: "Luis Bazan", interest: "Open Source, Programming, Football", location: "Met at the Dresden Airport", img: luis },
        { name: "Jessica Fernandez", interest: "Pop Culure, Music, Hollywood", location: "Met at the London Subway Station", img: jessi }
      ]
    };
  }
  render() {
    return <ConnectionP messages={this.state.messages} />;
  }
}

export default Connection;
