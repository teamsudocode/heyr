import React, { Component } from "react";
import { css } from "emotion";
import Chat from "../presentational/Chat";
import Explore from "../presentational/Explore";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Discover from "../presentational/Discover";

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "discover"
    };
  }
  onNav = active => {
    this.setState({ active });
  };

  render() {
    let { active } = this.state,
      newMessage = false;
    return (
      <div className={styles}>
        <div className="nav">
          <Chat onNav={this.onNav} active={active} />
          <Discover
            onNav={this.onNav}
            newMessage={newMessage}
            active={active}
          />
          <Explore onNav={this.onNav} active={active} />
        </div>
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

const styles = css`
  position: fixed;
  bottom: 0;
  width: 100%;

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5em 3em;
    background: #ffffff;
    box-shadow: 0 -1px 4px 0 rgba(231, 231, 231, 0.5);
  }
`;
