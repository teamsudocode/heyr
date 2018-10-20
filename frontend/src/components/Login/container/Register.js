import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import RegisterP from "../presentational/Register";
import { fetch_success } from "../actions/set_login";

class Register extends Component {
  login = response => {
    console.log(response);
    axios
      .post(`${process.env.REACT_APP_URL}/api/login`, {
        token: response.accessToken,
        user_id: response.userID
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
      setLogin: fetch_success
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionstoProps
)(Register);
