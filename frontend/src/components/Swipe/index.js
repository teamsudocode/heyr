import React from "react";
import MainCard from "./MainCard";
const Index = props => (
  <MainCard people={props.people} swipedBy={props.swipedBy} />
);
export default Index;
