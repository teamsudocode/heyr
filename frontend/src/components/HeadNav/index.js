import React, { Component } from "react";
import { css } from "emotion";
import { history } from "../Home";
class HeadBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "messages"
    };
  }
  onNav = active => {
    this.setState({ active }, () => {
      this.props.nav(active);
    });
  };
  render() {
    let { active } = this.state;
    console.log(this.state);
    if (active === "messages") {
      return (
        <div className={styles}>
          <h1 className="heading">Conversations</h1>
          <div className="buttongroup">
            <button className="activebutton">Messages</button>
            <button
              className="inactivebutton"
              onClick={() => this.onNav("connection")}
            >
              Connection
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className={styles}>
        <h1 className="heading">Conversations</h1>
        <div className="buttongroup">
          <button
            className="inactivebutton"
            onClick={() => this.onNav("messages")}
          >
            Messages
          </button>
          <button className="activebutton">Connection</button>
        </div>
      </div>
    );
  }
}

export default HeadBar;

const styles = css`
  padding: 1.5em 1.5em 0 1.5em;
  .buttongroup {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 1.5em;
    margin-bottom: 1em;

    button {
      transition-property: all;
      transition-timing-function: ease-in-out;
      transition-duration: 0.25s;
      font-size: 18px;
      letter-spacing: 0;
      text-align: center;
      cursor: pointer;
      padding: 0.5em;
      width: 50%;

      &:focus {
        outline: none;
      }
    }

    .inactivebutton {
      font-family: "ProductSans-Regular";
      color: #bebebe;
      border: none;
      background: transparent;
    }

    .activebutton {
      font-family: "ProductSans-Bold";
      color: #3b5998;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #3b5998;
    }
  }
`;
