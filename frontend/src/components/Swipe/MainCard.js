import React, { Component } from "react";

import Swipeable from "react-swipy";
import { css } from "emotion";
import axios from "axios";

import Card from "./Card";
import AcceptBtn from "./acceptBtn";
import RejectBtn from "./rejectBtn";
import acceptIcon from "../../assets/accept.svg";
import rejectIcon from "../../assets/reject.svg";
import modalImg from "../../assets/match.png";
import { history } from "../Home";

const modalCss = css`
  .overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  .window {
    background-color: #fff;
    position: absolute;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    top: 15%;
    padding: 24px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1,
    h2 {
      text-align: center;
    }

    img {
      align-self: center;
    }

    h1 {
      margin-top: 24px;
      margin-bottom: 24px;
      font-size: 40px;
    }

    h2 {
      margin-bottom: 36px;
    }

    button {
      font-family: "ProductSans-Bold";
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0.56px;
      width: 100%;
      border: none;
      padding: 16px;
      text-align: center;
      background: #ff0086;
      &:focus {
        outline: none;
      }
    }
  }
`;

const appStyles = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  margin: 0,
  padding: 24
};

const wrapperStyles = { position: "relative", width: "100%", height: "350px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "6%"
};

const headerStyles = {
  fontFamily: "ProductSans-Bold",
  fontSize: 24,
  color: "#FF0086",
  letterSpacing: 0,
  textAlign: "left",
  marginBottom: 10
};

const bodyStyles = {
  fontFamily: "Nunito Sans",
  fontSize: 18,
  color: "#000000",
  fontWeight: 700,
  marginBottom: 16
};

const linkStyles = {
  color: "#3B5998",
  textDecoration: "none",
  fontFamily: "Nunito Sans"
};

const dividerStyles = {
  border: "1px solid #F4F4F4"
};

class MainCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      showModal: false
    };
  }
  componentWillReceiveProps() {
    this.setState({ people: this.props.people });
  }
  remove = () => {
    this.setState(({ people }) => ({ people: people.slice(1, people.length) }));
  };

  onSwipe = direction => {
    console.log(direction, this.state.people[0]);
    let approve = direction === "right";
    if (!approve) return;
    let personSwiped = this.state.people[0];

    // mark swiped
    // axios
    //   .post(`${process.env.REACT_APP_URL}/api/user/swipe`, {
    //     user_id: localStorage.getItem("user_id"),
    //     mark_for: personSwiped
    //   })
    //   .then(response => {
    //     console.log("Swiped in backed");
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    if (this.props.swipedBy.indexOf(personSwiped.id) !== -1) {
      console.log("It's a match!");
    } else {
      console.log("Forced match");
    }
    localStorage.setItem("chattingWith", JSON.stringify(personSwiped));
    this.setState({ showModal: true });
  };

  render() {
    if (this.state.showModal) {
      return (
        <div className={modalCss}>
          <div className="window">
            <img src={modalImg} />
            <h1 className="heading">It's a Match</h1>
            <h2 className="title">
              Seems like you and James share the same interests. Let the
              conversations flow.
            </h2>
            <button onClick={() => history.push("/conversation")}>
              Start Conversation
            </button>
          </div>
          <div className="overlay" />
        </div>
      );
    }

    const { people } = this.state;
    console.log("inside maincard", people);
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <div style={appStyles}>
        <h1 style={headerStyles}>Hi {user.first_name}</h1>
        <h2 style={bodyStyles}>
          Welcome to{" "}
          <a href="" style={linkStyles}>
            New York Airport
          </a>
        </h2>
        <hr style={dividerStyles} />
        <div style={wrapperStyles}>
          {people.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <RejectBtn onClick={left}>
                      <img src={rejectIcon} />
                    </RejectBtn>
                    <AcceptBtn onClick={right}>
                      <img src={acceptIcon} />
                    </AcceptBtn>
                  </div>
                )}
                onAfterSwipe={this.remove}
                onSwipe={this.onSwipe}
              >
                <Card profilePic={user.profile_pic} people={people[0]} />
              </Swipeable>
              {people.length > 1 && <Card zIndex={-1} people={people[1]} />}
            </div>
          )}

          {/* {people.length <= 1 && <Card zIndex={-2} people={null} />} */}
        </div>
      </div>
    );
  }
}

export default MainCard;
