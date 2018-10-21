import React, { Component } from "react";
import ConversationP from "../presentational/Conversation";

class Conversation extends Component {
  constructor(props) {
    super(props);

    // TODO: Mark it blank
    this.state = {
      ws: null,
      msg: null
    };
  }

  // componentDidMount() {
  // const user_id = localStorage.getItem("user_id");
  // let ws = new WebSocket(
  //   `${process.env.REACT_APP_WS}/api/chat?user_id=${user_id}`
  // );
  // ws.onopen = () => {
  //   console.log("Websocket opened");
  // };
  // ws.onclose = evt => {
  //   console.log("Connection broke :/");
  // };
  // ws.onmessage = this.onMessage;

  // this.setState({ ws: ws });

  // setInterval(() => {
  //   let msg = {
  //     from: { id: "1", name: "himanshu" },
  //     to: { id: "2", name: "Migom" },
  //     text: "Hello"
  //   };
  //   ws.send(JSON.stringify(msg));
  // }, 1000);
  // this.ws.onmessage = e =>
  //   this.setState({ users: Object.values(JSON.parse(e.data)) });
  // this.ws.onerror = e => this.setState({ error: "WebSocket error" });
  // this.ws.onclose = e =>
  //   !e.wasClean &&
  //   this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` });
  // }

  // onMessage = msg => {
  //   msg = JSON.parse(msg.data);
  //   this.setState({ msg });
  // };

  // send = msg => {
  //   msg = {
  //     from: { id: "1", name: "himanshu" },
  //     to: { id: "2", name: "Migom" },
  //     text: "Hello"
  //   };
  //   this.ws.send(JSON.stringify(msg));
  // };

  // sendMsg = msg => {
  //   this.send(msg);
  // };

  // componentWillUnmount() {
  //   // this.ws.close();
  // }
  render() {
    // console.log("sending", this.state.ws);
    return <ConversationP msg={this.state.msg} ws={this.state.ws} />;
  }
}

export default Conversation;
