import React, { Component } from "react";
import { css } from "emotion";
import homecolor from "../../../assets/home-color.svg";
import home from "../../../assets/home.svg";

import { history } from "../../Home/index";
class Discover extends Component {
  nav = () => {
    history.push("/");
  };
  render() {
    if (this.props.active === "chat") {
      return <img onClick={this.nav} alt="icon" src={home} />;
    } else {
      return <img alt="icon" src={homecolor} />;
    }
  }
}

export default Discover;
