import React, { Component } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";

const Icon = props => {
  return (
    <Link to={props.url}>
      <img alt="icon" src={props.src} />
    </Link>
  );
};
export default Icon;
