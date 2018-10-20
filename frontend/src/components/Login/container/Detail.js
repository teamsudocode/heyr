import React, { Component } from "react";
import DetailP from "../presentational/Detail";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [
        "Cricket",
        "Politics",
        "Sports",
        "Music",
        "Football",
        "Hollywood",
        "Anime",
        "Programming",
        "Pop Culture",
        "Travelling",
        "Life",
        "Writing",
        "Reading"
      ]
    };
  }

  componentDidMount() {
    // TODO fetch list of interest and update state
  }
  render() {
    return <DetailP interests={this.state.interests} />;
  }
}

export default Detail;
