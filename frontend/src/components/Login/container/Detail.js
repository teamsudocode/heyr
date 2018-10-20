import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch_success } from "../actions/set_login";

import DetailP from "../presentational/Detail";
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [
        "Cricket",
        "Politics",
        "Sports",
        "Music",
        "Football",
        "Hollywood",
        "Anime",
        "Programming",
        "Pop Culture",
        "Travelling",
        "Life",
        "Writing",
        "Reading"
      ]
    };
  }

  componentDidMount() {
    // TODO fetch list of interest and update state
  }

  render() {
    return (
      <DetailP
        setLogin={this.props.setLogin}
        interests={this.state.interests}
      />
    );
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
)(Detail);
