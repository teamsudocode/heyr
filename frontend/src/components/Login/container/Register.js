import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegisterP from "../presentational/Register";
import { set_login } from "../actions/set_login";

class Register extends Component {
  login = response => {
    console.log(response);
    //api call to send token, return newUser?
    if (newUser) {
      //nav to details
    } else {
      //action create set_loggedin
    }
  };
  render() {
    return <RegisterP login={this.login} />;
  }
}

const mapStatetoProps = (state, props) => {
  return {
    ui: state.ui,
    ...props
  };
};
const mapActionstoProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onLogin: set_login
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Register);
