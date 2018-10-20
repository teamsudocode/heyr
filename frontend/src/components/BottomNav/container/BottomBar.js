import React, { Component } from "react";
import { css } from "emotion";
import Chat from "../presentational/Chat";
import Explore from "../presentational/Explore";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Discover from "../presentational/Discover";

class BottomBar extends Component {
  onNav = active => {
    this.props.onChangeActive(active);
  };

  render() {
    let active = "chat",
      newMessage = false;
    return (
      <div>
        <Chat onNav={this.onNav} active={active} />
        <Discover onNav={this.onNav} newMessage={newMessage} active={active} />
        <Explore onNav={this.onNav} active={active} />
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    medic: state.ui,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators({}, dispatch);
};
export default connect(
  mapStatetoProps,
  mapActionstoProps
)(BottomBar);
