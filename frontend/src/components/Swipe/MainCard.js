import React, { Component } from "react";

import Swipeable from "react-swipy";

import Card from "./Card";
import AcceptBtn from "./acceptBtn";
import RejectBtn from "./rejectBtn";
import acceptIcon from "../../assets/accept.svg"
import rejectIcon from "../../assets/reject.svg"

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
  marginBottom:10
}

const bodyStyles = {
  fontFamily: "Nunito Sans",
  fontSize: 18,
  color: "#000000",
  fontWeight: 700,
  marginBottom: 16
}

const linkStyles = {
  color: "#3B5998",
  textDecoration: "none",
  fontFamily: "Nunito Sans",
}

const dividerStyles = {
  border: "1px solid #F4F4F4"
}

class MainCard extends Component {
  state = {
    cards: ["First", "Second", "Third"]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles}>
        <h1 style={headerStyles}>Hi Abhishek</h1>
        <h2 style={bodyStyles}>Welcome to <a href="" style={linkStyles}>New York Airport</a></h2>
        <hr style={dividerStyles}/>
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <RejectBtn onClick={left}><img src={rejectIcon}/></RejectBtn>
                    <AcceptBtn onClick={right}><img src={acceptIcon}/></AcceptBtn>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>
      </div>
    );
  }
}

export default MainCard;
