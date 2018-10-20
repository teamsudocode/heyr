import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "100%",
  height: "350px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  background: "#FFFFFF",
  boxShadow: "0 3px 6px 0 rgba(199,199,199,0.50)"
};

const bgImage = {
url: ""
}

const image = {
  textAlign: "center",
  filter: "blur(10px)"
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
    <div style={bgImage}></div>
    <div style={info}>
      <div style={image}>
        <img src="../../assets/test.png"/>
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
