import React, { Component } from "react";
import { css } from "emotion";
import FacebookLogin from "react-facebook-login";

import bicycleimage from "../../../assets/bicycle_full.png";
import locationimage from "../../../assets/location.png";

class Register extends Component {
  render() {
    return (
      <div className={styles}>
        <img className="bicycle_full" alt="bicycleimage" src={bicycleimage} />
        <span>
          <img
            className="Combined-Shape"
            alt="locationimage"
            src={locationimage}
          />
          <span className="heyr">heyr</span>
        </span>
        <div />
        <FacebookLogin
          appId="193448981230282"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.props.login}
        />
        <span className="Easily-Catch-up-with">
          Easily Catch up with Like Minded People Nearby
        </span>
      </div>
    );
  }
}
export default Register;

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  .bicycle_full {
    width: 414px;
    height: 312px;
    mix-blend-mode: multiply;
  }
  .Combined-Shape {
    width: 39.1px;
    height: 57.1px;
  }
  .heyr {
    width: 162.1px;
    height: 75px;
    color: #ff0086;
  }
  .Easily-Catch-up-with {
    width: 376px;
    height: 22px;
    font-family: NunitoSans;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  .Rectangle {
    width: 326px;
    height: 51px;
    border-radius: 2px;
    background-color: #3b5998;
  }
`;
