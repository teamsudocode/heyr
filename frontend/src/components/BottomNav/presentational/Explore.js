import React, { Component } from "react";
import { css } from "emotion";
import explorecolor from "../../../assets/explore-color.svg";
import explore from "../../../assets/explore.svg";

import { history } from "../../Home";

class Explore extends Component {
  nav = () => {
    history.push("/explore");
  };
  render() {
    if (this.props.active === "chat") {
      return <img onClick={this.nav} alt="icon" src={explore} />;
    } else {
      return <img onClick={this.nav} alt="icon" src={explorecolor} />;
    }
  }
}

export default Explore;
