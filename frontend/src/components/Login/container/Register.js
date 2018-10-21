import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import RegisterP from "../presentational/Register";
import { fetch_success } from "../actions/set_login";

class Register extends Component {
  login = response => {
    console.log(process.env.REACT_APP_URL);
    axios
      .post(`${process.env.REACT_APP_URL}/api/login`, {
        token: response.accessToken,
        user_id: response.userID
      })
      .then(response => {
        localStorage.setItem("user_id", response.data.user.id);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        let newUser = response.data.exists;
        if (!newUser) {
          this.props.navToDetails();
        } else {
          this.props.setLogin();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
