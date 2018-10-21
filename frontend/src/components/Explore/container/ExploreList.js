import React, { Component } from "react";
import PExploreList from "../presentational/ExploreList";
import dunkin from "../../../assets/dunkin.png";
import xpress from "../../../assets/xpress.png";
import dylan from "../../../assets/dylan.png";
import wendy from "../../../assets/wendy.png";

class ExploreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { title: "Dunkin Donuts", distance: "750m away", address: "Terminal 4, 500 Terminal Dr", src: dunkin },
        { title: "Dylan's Candy Bar", distance: "1500m away ", address: "Terminal 2, 500 Terminal Dr" , src: dylan},
        { title: "Xpress Spa", distance: "1690m away", address: "Terminal 3", src: xpress },
        { title: "Wendy's", distance: "750m away", address: "Terminal 2, Building 54, Space 35", src: wendy }
      ]
    };
  }
  render() {
    return <PExploreList messages={this.state.messages} />;
  }
}

export default ExploreList;
