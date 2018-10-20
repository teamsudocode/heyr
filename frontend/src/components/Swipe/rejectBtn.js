import React from "react";
import {css} from "emotion"
const RejectBtn = ({ children, onClick }) => (
  <button onClick={onClick} className={styles}>
    {children}
  </button>
);

export default RejectBtn;

const styles = css`
height:72px;
width:72px;
background: #EAEAEA;
box-shadow: 0 4px 6px 0 rgba(203,203,203,0.50);
border: transparent;
border-radius: 50%;
cursor:pointer;
userSelect: "none",
`
