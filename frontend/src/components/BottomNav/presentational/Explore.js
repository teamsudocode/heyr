import React from "react";
import Icon from "./Icon";
import explorecolor from "../../../assets/explore-color.svg";
import explore from "../../../assets/explore.svg";

const Explore = props => {
  if (props.active === true) {
    return <Icon src={explorecolor} />;
  } else {
    return <Icon src={explore} />;
  }
};

export default Explore;
