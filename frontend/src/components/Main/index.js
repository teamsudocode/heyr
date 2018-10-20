import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Login from "../Login";
import Home from "../Home";

class Index extends Component {
  render() {
    return this.props.ui.isLogged ? <Home /> : <Login />;
  }
}

const mapStatetoProps = (state, props) => {
  return {
    ui: state.ui,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Index);
