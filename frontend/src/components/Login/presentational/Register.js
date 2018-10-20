import React, { Component } from "react";
import { css } from "emotion";
import FacebookLogin from "react-facebook-login";

import headerImage from "../../../assets/header.png";
import locationimage from "../../../assets/logo.svg";

class Register extends Component {
  render() {
    return (
      <div className={styles}>
        <div className="header">
          <img alt="loaderImage" src={headerImage} />
        </div>
        <img className="logo" alt="Heyr" src={locationimage} />
        <h1>Easily Catch up with Like Minded People Nearby</h1>
        <FacebookLogin
          appId="193448981230282"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.props.login}
        />
        <p>
          By continuing, you agree to our terms and conditons
        </p>
      </div>
    );
  }
}
export default Register;

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:0 1.5em 1em 1.5em;
  max-height: 100vh;
  overflow:hidden;
  .header{ 
    img{
      max-width: 100%;
      margin: 10vh 0;
    }
  }

  height: 100vh;
  overflow: auto;
  .logo{
    height:75px;
  }
  h1{
    font-family: "Nunito Sans";
    font-size: 1em;
    color: #000000;
    font-weight: 700;
    text-align: center;
    margin-top:1em;
    margin-bottom:4em;
    line-height:1.5em;
  }
  .kep-login-facebook{
    font-family: "ProductSans-Bold";
    text-transform: none;
    font-size: 1em;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    border-radius: 2px;
    border: 1px solid transparent;
    text-align: center;
  }
  p{
    margin-top: 1.5em;
    font-family: "NunitoSans-Regular";
    font-size: 14px;
    color: #B1B1B1;
    text-align: center;
    line-height:1.25em;
  }
`;
