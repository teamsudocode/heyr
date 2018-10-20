import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RegisterP from "../presentational/Register";
import { set_login } from "../actions/set_login";

class Register extends Component {
  login = response => {
    console.log(response);
    // TODO api call to send token, return newUser?
    let newUser = true;
    if (newUser) {
      this.props.navToDetails();
    } else {
      this.props.setLogin();
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
      setLogin: set_login
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Register);
