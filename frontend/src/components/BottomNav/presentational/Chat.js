import React from "react";
import Icon from "./Icon";
import convocolor from "../../../assets/convo-color.svg";
import convo from "../../../assets/convo.svg";

const Chat = props => {
  if (props.active === true) {
    return <Icon src={convocolor} />;
  } else {
    return <Icon src={convo} />;
  }
};

export default Chat;
