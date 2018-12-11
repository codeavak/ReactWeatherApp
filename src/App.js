import React, { Component } from "react";

import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component {
  state = {};

  success = position => {
    this.setState({
      lat: position.coords.latitude
    });
  };

  error = () => {
    "Unable to retrieve your location";
  };

  geoFindMe = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      () => {
        this.setState({
          err: "oh no error"
        });
      }
    );
  };

  monthFinder = () => {
    var d = new Date();
    var n = d.getMonth();
    console.log(`the month is ${n}`);
    this.setState({
      month: n
    });
  };

  componentDidMount() {
    console.log("Component mounted! Getting user location!");
    this.geoFindMe();
    this.monthFinder();
  }

  render() {
    if (this.state.lat)
      return (
        <div>
          <SeasonDisplay month={this.state.month} lat={this.state.lat} />
        </div>
      );
    else if (this.state.err)
      return <div style={{ color: "red" }}>Oh no bad error!</div>;
    else
      return (
        <div style={{ color: "blue" }}>
          <Loader message="Please allow location service to access your location!" />
        </div>
      );
  }
}

export default App;
