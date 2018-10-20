import React from "react";
import {css} from "emotion"
const AcceptBtn = ({ children, onClick }) => (
  <button onClick={onClick} className={styles}>
    {children}
  </button>
);

export default AcceptBtn;

const styles = css`
height:72px;
width:72px;
background: #FFF2F9;
box-shadow: 0 4px 6px 0 rgba(203,203,203,0.50);
border: transparent;
border-radius: 50%;
cursor: pointer;
user-select: none
`
