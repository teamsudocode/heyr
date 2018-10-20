import React, { Component } from "react";
import { css } from "emotion";
class Detail extends Component {
  renderOptions = () =>
    this.props.interests.map(item => <button className={`click ${this.props.active}`}>{item}</button>);

  render() {
    return (
      <div className={styles}>
        <h1 className="heading">Setup your Profile</h1>
        <h2 className="title">Let the fellow travellers know more about you</h2>
        <hr/>
        <p className="body">About You</p>
        <input className="bio"/>
        <p className="body">I would like talk about</p>
        <div className="listClick">
          {this.renderOptions()}
          <button className="more">More +</button>
        </div>
        <br/>
        <button className="button">Save Profile</button>
      </div>
    );
  }
}
export default Detail;

const styles = css`
display: flex;
flex-direction: column;
align-items: left;
padding:2em 1.5em 1em 1.5em;
max-height: 100vh;
overflow:hidden;
h1{
  margin-bottom:0.5em;
}
hr{
  height:0;
  border: 1px solid #F4F4F4;
  margin: 1em 0 1.5em 0;
}
.body{
  margin-bottom:10px;
}

.bio{
  background: #FDFDFD;
  border: 1px solid #F3F3F3;
  border-radius: 2px;
  margin-bottom:1.5em;
  height:72px;
  padding:0.5em;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  transition-property: all;
  &:focus{
    border: 1px solid #3B5998;
    outline: none
  }
}

.listClick{
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
}
.click{
  font-family: "Nunito Sans";
  font-size: 14px;
  color: #CBCBCB;
  padding: 0.5em 0.75em;
  border-radius: 2px;
  border: 1px solid #D9D9D9;
  background-color: #fff;
  margin: 6px 8px 6px 0;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  transition-property: all;
  &:focus{
    outline: none
  }
}

.more{
  font-family: "Nunito Sans";
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #3B5998;
  letter-spacing: 0;
}

.active{
  background: #FFF2F9;
  color: #FF0086;
  border: 1px solid #FF0086;
}

`;
