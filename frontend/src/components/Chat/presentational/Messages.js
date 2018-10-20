import React, { Component } from "react";
import { css } from "emotion";
class Messages extends Component {
  constructor(props) {
    super(props);
  }
  renderCards = (element, i) => {
    let newitem = "";
    if (i === 1) {
      newitem = "new";
    } else {
      newitem = "";
    }
    return (
      <div className="chat">
        <div className="roe">
          <h2 className="title">{element.name}</h2>
          <p className="body small">{element.time} ago</p>
        </div>
        <h3 className={`${newitem} body`}>{element.message}</h3>
        <hr />
      </div>
    );
  };
  render() {
    return (
      <div className={style}>
        {this.props.messages.map((element, i) => {
          return this.renderCards(element, i);
        })}
      </div>
    );
  }
}

export default Messages;

const style = css`
  padding: 12px 24px 24px 24px;
  .chat {
    margin-bottom: 16px;
    cursor: pointer;

    .roe {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h2 {
        margin-bottom: 8px;
      }
    }

    .small {
      font-size: 10px !important;
    }

    h3 {
      margin-bottom: 1em;
    }

    .new {
      color: #ff0086 !important;
    }
    hr {
      height: 0;
      border: 1px solid #f4f4f4;
    }
  }
`;
