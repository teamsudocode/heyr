import React, { Component, Fragment } from "react";
import { css } from "emotion";
import locationIcon from "../../../assets/icon.svg";
import contact from "../../../assets/dp.png";

import boyImg from "../../../assets/boy.png";
import backImg from "../../../assets/back.svg";
import sendImg from "../../../assets/send.svg";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      messages: [],
      chattingWith: JSON.parse(localStorage.getItem("chattingWith"))
    };

    this.ws = null;
    if (this.props.ws !== null) this.props.ws.onmessage = this.receiveMessage;
    console.log(this.props.ws);
  }

  componentDidMount() {
    const user_id = localStorage.getItem("user_id");
    let ws = new WebSocket(
      `${process.env.REACT_APP_WS}/api/chat?user_id=${user_id}`
    );
    ws.onopen = () => {
      console.log("Websocket opened");
      this.setState(this.state);
    };
    ws.onclose = evt => {
      console.log("Connection broke :/");
    };
    ws.onmessage = this.receiveMessage;
    this.ws = ws;
  }

  updateInput = evt => {
    this.setState({
      currentInput: evt.target.value
    });
  };

  receiveMessage = msg => {
    console.log(msg);
    msg = JSON.parse(msg.data);
    this.setState({ messages: [...this.state.messages, msg] });
  };

  sendMsg = () => {
    console.log("sending", this.state.currentInput);
    let msg = {
      from: { id: localStorage.getItem("user_id"), name: "himanshu" },
      to: {
        id: this.state.chattingWith.id,
        name: this.state.chattingWith.name
      },
      text: this.state.currentInput
    };
    this.ws.send(JSON.stringify(msg));
    this.setState({
      messages: [...this.state.messages, msg],
      currentInput: ""
    });
  };

  renderCards = (element, i) => {
    let fromMe = element.from.id === localStorage.getItem("user_id");
    if (fromMe) {
      return (
        <div className="sent" key={i}>
          <div className="msg">{element.text}</div>
        </div>
      );
    } else {
      return (
        <div className="received" key={i}>
          <img src={this.state.chattingWith.profile_pic} />
          <div className="msg">{element.text}</div>
        </div>
      );
    }
  };

  render() {
    if (this.ws === null) {
      return <div>Connecting...</div>;
    }
    return (
      <div className={style}>
        <div className="info">
          <div className="back">
            <img src={backImg} />
          </div>
          <div className="about">
            <h1 className="heading">{this.state.chattingWith.name}</h1>
            <h2 className="body">
              Male, 24, India - {this.state.chattingWith.bio}
            </h2>
          </div>
        </div>

        <hr />

        <div className="msg">
          {this.state.messages
            .slice(0, 2)
            .map((msg, i) => this.renderCards(msg, i))}
        </div>

        <div className="control">
          <div className="input">
            <input
              type="text"
              className="body"
              placeholder="Start typing..."
              onChange={this.updateInput}
              value={this.state.currentInput}
            />
            <button className="send" onClick={this.sendMsg}>
              <img src={sendImg} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;

const style = css`
  padding: 1.5em;

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .back {
      cursor: pointer;
    }

    .about {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        text-align: center;
        margin-bottom: 0.5em;
      }

      h2 {
        margin-bottom: 1em;
      }
    }
  }

  .control {
    position: fixed;
    bottom: calc(1.5em + 32px + 10px);
    width: 100%;

    .input {
      display: flex;
      flex-direction: row;
      padding-bottom: 1.5em;

      input {
        width: 66vw;
        align-self: center;
        padding: 1em;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        transition-property: all;
        background: #fdfdfd;
        border: 1px solid #f3f3f3;
        border-radius: 2px;
        margin-right: 1em;

        &:focus {
          outline: none;
          border: 1px solid #ff0086;
        }
      }
    }
  }

  hr {
    margin-bottom: 1.5em;
  }

  .msg {
    .received {
      display: flex;
      flex-direction: row;
      margin-top: 1em;
      margin-right: 1em;

      img {
        align-self: center;
        margin-right: 1em;
      }

      .msg {
        font-family: "Nunito Sans";
        font-size: 14px;
        color: #6e6e6e;
        letter-spacing: 0;
        line-height: 24px;
        padding: 12px;
        width: auto;
        background: #f5f5f5;
        border-radius: 2px;
      }
    }

    .sent {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-left: 1em;

      .msg {
        font-family: "Nunito Sans";
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        line-height: 24px;
        float: right;
        padding: 12px;
        background: #3b5998;
        border-radius: 2px;
      }
    }
  }
`;
