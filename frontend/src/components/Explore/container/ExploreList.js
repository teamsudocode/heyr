import React, { Component } from "react";
import PExploreList from "../presentational/ExploreList";
class ExploreList extends Component {
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
    return <PExploreList messages={this.state.messages} />;
  }
}

export default ExploreList;
