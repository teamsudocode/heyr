import React, { Component } from "react";
import axios from "axios";
import Swipe from "../Swipe";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.getPeopleLoop = null;
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      setTimeout(this.getPeople, 1000);
      this.getPeople();
      // this.getPeopleLoop = setInterval(() => {
      //   this.getPeople();
      // }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.getPeopleLoop);
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
          this.setState({
            people: response.data.nearme,
            swipedBy: response.data.swiped_by
          });
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
    console.log("inside discover", this.state.people);
    return (
      <div>
        <Swipe people={this.state.people} swipedBy={this.state.swipedBy} />
      </div>
    );
  }
}

export default Index;
