import React, { Component } from "react";
import { css } from "emotion";
import Icon from "../presentational/Icon";

import homecolor from "../../../assets/home-color.svg";
import convocolor from "../../../assets/convo-color.svg";
import explorecolor from "../../../assets/explore-color.svg";
import home from "../../../assets/home.svg";
import convo from "../../../assets/convo.svg";
import explore from "../../../assets/explore.svg";

class BottomBar extends Component {
  renderIcons = () => {
    return (
      <div>
        <Icon src="home-color.svg" />
      </div>
    );
  };
  render() {
    <div class="bottombar">
      <div class="nav">
        <div>
          <Icon src="home-color.svg" />
        </div>
        <div>
          <Icon src="convo.svg" />
        </div>
        <div>
          <Icon src="explore.svg" />
        </div>
      </div>
    </div>;
  }
}
