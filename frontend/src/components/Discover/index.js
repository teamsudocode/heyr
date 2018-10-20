import React, { Component } from "react";
import axios from "axios";
import Swipe from "../Swipe";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      setInterval(() => {
        this.getPeople();
      }, 100);
    }
  }

  getPeople = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      if (latitude === undefined) return [];
      const user_id = localStorage.getItem("user_id");
      let coordinates = JSON.stringify([latitude, longitude]);
      let body = {
        user_id,
        coordinates: [latitude, longitude]
      };
      axios
        .post(`${process.env.REACT_APP_URL}/api/people_around`, body)
        .then(response => {
          this.setState({ people: response.data.nearme });
        })
        .catch(function(error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  render() {
    return (
      <div>
        <Swipe people={this.state.people} />
      </div>
    );
  }
}

export default Index;
