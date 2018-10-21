import React, { Component, Fragment } from "react";
import { css } from "emotion";
import locationIcon from "../../../assets/icon.svg";
class Connection extends Component {
  constructor(props) {
    super(props);
  }
  renderCards = (element, i) => {
    return (
      <Fragment>
        <div className="item">
          <div className="display">
            <img src={element.img} />
          </div>
          <div className="info">
            <h1 className="title">{element.name}</h1>
            <h2>{element.interest }</h2>
            <h3>
              <img src={locationIcon} />
              <span>{element.location}</span>
            </h3>
          </div>
        </div>
        <hr />
      </Fragment>
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

export default Connection;

const style = css`
  padding: 12px 24px 24px 24px;
  hr {
    height: 0;
    border: 1px solid #f4f4f4;
  }
  .item {
    display: flex;
    flex-direction: row;
    margin: 0.5em 0;
    cursor: pointer;
    .info {
      margin-left: 1em;
      align-self: flex-start;
      h2 {
        font-family: "Nunito Sans";
        font-size: 12px;
        color: rgba(255, 0, 134, 0.75);
      }

      h3 {
        span {
          font-family: "Nunito Sans";
          font-size: 10px;
          color: #999999;
          margin-left: 4px;
        }
      }
    }

    hr {
      width: 100%;
    }
  }
`;
