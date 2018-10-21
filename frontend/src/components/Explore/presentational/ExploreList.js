import React, { Component, Fragment } from "react";
import { css } from "emotion";
class ExploreList extends Component {
  constructor(props) {
    super(props);
  }
  renderCards = (element, i) => {
    return (
      <div className="item">
        <img src={element.src} />
        <p className="title">{element.title}</p>
        <p className="distance">{element.distance}</p>
        <span className="body"> - {element.address}</span>
      </div>
    );
  };
  render() {
    return (
      <div className={style}>
        <h1 className="heading">Explore</h1>
        <h2 className="title">
          Welcome to <a href="#">New York Airport</a>
        </h2>
        <div>
          {this.props.messages.map((element, i) => {
            return this.renderCards(element, i);
          })}
        </div>
      </div>
    );
  }
}

export default ExploreList;

const style = css`
margin-bottom:72px;
overflow-y:scroll!important;
  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 1.5em;
  }

  a {
    color: #3b5998 !important;
    text-decoration: none;
  }
  padding: 12px 24px 24px 24px;
  .item {
    margin-bottom: 2em;
    img {
      width: 100%;
      margin-bottom: 8px;
    }
    .title {
      margin-bottom: 4px;
    }
    .distance {
      font-family: "Nunito Sans";
      font-size: 14px;
      color: #ff0086;
      letter-spacing: 0;
      text-align: left;
      display: inline-block;
    }
  }
`;
