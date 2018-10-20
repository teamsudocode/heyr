import React, { Fragment, PureComponent } from "react";
import { Route, Switch } from "react-router-dom";

class Index extends PureComponent {
  componentDidMount() {
    const user_id = localStorage.getItem("user_id");
    this.ws = new WebSocket(
      `${process.env.REACT_APP_WS}/api/chat?user_id=${user_id}`
    );
    // this.ws.onmessage = e =>
    //   this.setState({ users: Object.values(JSON.parse(e.data)) });
    // this.ws.onerror = e => this.setState({ error: "WebSocket error" });
    // this.ws.onclose = e =>
    //   !e.wasClean &&
    //   this.setState({ error: `WebSocket error: ${e.code} ${e.reason}` });
  }
  send = () => {
    let msg = {
      from: { id: "1", name: "himanshu" },
      to: { id: "2", name: "Migom" },
      text: "Hello"
    };
    this.ws.send(JSON.stringify(msg));
  };
  componentWillUnmount() {
    this.ws.close();
  }
  render() {
    return <div onClick={this.send}>chat</div>;
  }
}

export default Index;
