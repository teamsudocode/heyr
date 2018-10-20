import React, { Component } from "react";
import axios from "axios";
import { css } from "emotion";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterest: [],
      bio: ""
    };
  }

  updateInterests = e => {
    let index = this.state.selectedInterest.indexOf(e.target.innerText);
    if (index === -1) {
      this.setState({
        selectedInterest: [...this.state.selectedInterest, e.target.innerText]
      });
    } else {
      this.setState({
        selectedInterest: this.state.selectedInterest.filter(
          (_, i) => i !== index
        )
      });
    }
  };

  updateBio = e => {
    this.setState({ bio: e.target.value });
  };

  updateDetails = () => {
    // TODO make api call
    let payload = {
      interests: this.state.selectedInterest,
      bio: this.state.bio
    };
    console.log(payload);
    this.props.setLogin();
  };

  renderListofTopics = () =>
    this.props.interests.map(item => {
      let notactive = this.state.selectedInterest.indexOf(item) === -1;
      if (notactive) {
        return (
          <button onClick={this.updateInterests} className="click">
            {item}
          </button>
        );
      } else {
        return (
          <button onClick={this.updateInterests} className="click active">
            {item}
          </button>
        );
      }
    });

  render() {
    console.log(this.state.selectedInterest);
    return (
      <div className={styles}>
        <h1 className="heading">Setup your Profile</h1>
        <h2 className="title">Let the fellow travellers know more about you</h2>
        <hr />
        <p className="body">About You</p>
        <input
          onChange={this.updateBio}
          className="bio"
          value={this.state.bio}
        />
        <p className="body">I would like talk about</p>
        <div className="listClick">
          {this.renderListofTopics()}
          <button className="more">More +</button>
        </div>
        <br />
        <button onClick={this.updateDetails} className="button">
          Save Profile
        </button>
      </div>
    );
  }
}
export default Detail;

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2em 1.5em 1em 1.5em;
  max-height: 100vh;
  overflow: hidden;
  h1 {
    margin-bottom: 0.5em;
  }
  hr {
    height: 0;
    border: 1px solid #f4f4f4;
    margin: 1em 0 1.5em 0;
  }
  .body {
    margin-bottom: 10px;
  }

  .bio {
    background: #fdfdfd;
    border: 1px solid #f3f3f3;
    border-radius: 2px;
    margin-bottom: 1.5em;
    height: 72px;
    padding: 0.5em;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    transition-property: all;
    &:focus {
      border: 1px solid #3b5998;
      outline: none;
    }
  }

  .listClick {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .click {
    font-family: "Nunito Sans";
    font-size: 14px;
    color: #cbcbcb;
    padding: 0.5em 0.75em;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    margin: 6px 8px 6px 0;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    transition-property: all;
    &:focus {
      outline: none;
    }
  }

  .more {
    font-family: "Nunito Sans";
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: #3b5998;
    letter-spacing: 0;
  }

  .active {
    background: #fff2f9;
    color: #ff0086;
    border: 1px solid #ff0086;
  }
`;
