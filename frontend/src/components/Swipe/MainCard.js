import React, { Component } from "react";

import Swipeable from "react-swipy";
import axios from "axios";

import Card from "./Card";
import AcceptBtn from "./acceptBtn";
import RejectBtn from "./rejectBtn";
import acceptIcon from "../../assets/accept.svg";
import rejectIcon from "../../assets/reject.svg";
import { history } from "../Home";

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
  marginTop: "-5%"
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
      people: []
    };
  }
  componentWillReceiveProps() {
    this.setState({ people: this.props.people });
  }
  remove = () => {
    this.setState(({ people }) => ({ people: people.slice(1, people.length) }));
  };

  onSwipe = direction => {
    console.log(direction);
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
    // TODO flash it's a match

    // TODO move to conversation
    localStorage.setItem("chattingWith", JSON.stringify(personSwiped));
    history.push("/conversation");
  };

  render() {
    const { people } = this.state;
    console.log("inside maincard", people);
    return (
      <div style={appStyles}>
        <h1 style={headerStyles}>Hi Abhishek</h1>
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
                <Card people={people[0]} />
              </Swipeable>
              {people.length > 1 && <Card zIndex={-1} people={people[1]} />}
            </div>
          )}
          {people.length <= 1 && <Card zIndex={-2} people={null} />}
        </div>
      </div>
    );
  }
}

export default MainCard;
