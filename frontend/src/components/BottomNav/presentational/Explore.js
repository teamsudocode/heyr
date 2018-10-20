import React, { Component } from "react";
import { css } from "emotion";
import explorecolor from "../../../assets/explore-color.svg";
import explore from "../../../assets/explore.svg";

import { history } from "../../Home";

class Explore extends Component {
  nav = () => {
    history.push("/explore");
    this.props.onNav("explore");
  };
  render() {
    if (this.props.active === "explore") {
      return <img onClick={this.nav} alt="icon" src={explorecolor} />;
    } else {
      return <img onClick={this.nav} alt="icon" src={explore} />;
    }
  }
}

export default Explore;
