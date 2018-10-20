import React from "react";
import cardBackground from "../../assets/cardbg.svg"
import testImage from "../../assets/test.png"

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "90%",
  height: "350px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  background: "#FFFFFF",
  overflow: "hidden",
  boxShadow: "0 3px 6px 0 rgba(199,199,199,0.50)"
};

const bgImage = {
position: "absolute",
top: 0,
zIndex: -99
}

const fullWidth = {
width:"100%"
}

const image = {
  textAlign: "center",
  position: "relative",
  left: -100,
  top: 0,
  zIndex: -3
}

const blur = {
  filter: "blur(8px)",
  position: "relative",
  top: 0,
  left: 100,
  zIndex: 3
}

const below = {
  position: "absolute"
}

const info = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}

const label1 = {
  fontFamily: "Nunito Sans",
  fontSize: 12,
  marginTop:32,
  color: "#CBCBCB",
  letterSpacing: 1,
  marginBottom: 8,
  textAlign: "center",
  textTransform: "uppercase"
}

const label2 = {
  fontFamily: "Nunito Sans",
  fontSize: 12,
  color: "#CBCBCB",
  letterSpacing: 1,
  marginBottom: 8,
  textAlign: "center",
  textTransform: "uppercase"
}

const body = {
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  fontSize: 16,
  color: "#000000",
  textAlign: "center",
  marginBottom: 32
}

const special = {
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  fontSize: 20,
  color: "#FF0086",
  marginBottom: 24
}

const divider = {
  border: "1px solid #FF0086",
  width: "20%"
}

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>
    <div style={bgImage}>
      <img src={cardBackground} style={fullWidth}/>
    </div>
    <div style={info}>
      <div style={image}>
        <img src={testImage} style={blur}/>
        <img src={testImage} style={below}/>
      </div>
      <div style={label1}>I am a</div>
      <div style={body}>Avid Trekker and Hobbyist Rapper</div>
      <div style={label2}>and I would like to talk about</div>
      <div style={special}>Music, Cricket, Politics, Bollywood</div>
      <hr style={divider}/>
    </div>
  </div>
);

export default Card;
