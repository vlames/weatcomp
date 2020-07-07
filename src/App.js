// The file describes the main app component. It contains the data
// array that is used to display data in other components and handles
// operations such as add and remove for interactivity

import React, { Component } from "react";
import { Container } from "bootstrap-4-react";
import Form from "./Form";
import Weather from "./Weather";

class App extends Component {

  // Provides storage for locations with weather information
  state = {
    locations: []
  }

  // Adds a location to the group of locations
  addLocation = aLocation => {
    this.setState({ locations: [...this.state.locations, aLocation] });
  }

  // Removes a location from the group of locations
  removeLocation = aLocation => {
    const { locations } = this.state;
    const updatedLocations = locations.filter(
      location => locations.indexOf(location) !== aLocation);
    this.setState({locations: updatedLocations});
  }
 
  // Renders components of the app
  render() {
    return (
      <Container p="4">
        <Container p="4" bg="light" rounded mb="3">
          <h2 className="green">Weat<span id="logoComp">Comp</span></h2>
        </Container>
        <Container bg="light" rounded>
          <Form addLocation={this.addLocation}/>
        </Container>
        <Weather locationData={this.state.locations} removeLocation={this.removeLocation}/>
      </Container>
    );
  }
}

export default App;