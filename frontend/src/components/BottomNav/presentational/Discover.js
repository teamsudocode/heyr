import React, { Component } from "react";
import { css } from "emotion";
import homecolor from "../../../assets/home-color.svg";
import home from "../../../assets/home.svg";

import { history } from "../../Home/index";
class Discover extends Component {
  nav = () => {
    history.push("/");
    this.props.onNav("discover");
  };
  render() {
    if (this.props.active === "discover") {
      return <img onClick={this.nav} alt="icon" src={homecolor} />;
    } else {
      return <img onClick={this.nav} alt="icon" src={home} />;
    }
  }
}

export default Discover;
