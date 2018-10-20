import React from "react";
import Icon from "./Icon";
import discovercolor from "../../../assets/home-color.svg";
import discover from "../../../assets/home.svg";

const Discover = props => {
  if (props.active === true) {
    return <Icon src={discovercolor} />;
  } else {
    return <Icon src={discover} />;
  }
};

export default Discover;
