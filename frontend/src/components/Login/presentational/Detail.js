import React, { Component } from "react";
import { css } from "emotion";
class Detail extends Component {
  renderOptions = () =>
    this.props.interests.map(item => <button>{item}</button>);

  render() {
    return (
      <div className={styles}>
        <h1>Setup your Profile</h1>
        <h2>Let the fellow travellers know more about you</h2>
        <p>About You</p>
        <input />
        <p>I would like talk about</p>
        {this.renderOptions()}
        <button>More +</button>
        <button>Save Profile</button>
      </div>
    );
  }
}
export default Detail;

const styles = css``;
