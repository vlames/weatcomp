// This file defines two react components that work together to
// structure the looks of the weather cards and their container

import React, { Component } from "react";
import { Container, Figure, Col, Row, Button } from "bootstrap-4-react";

// Renders all the weather data for given locations
class Weather extends Component {
  render() {

    // Prevents display of a container for location cards
    if (this.props.locationData.length === 0) {
      return null;
    }

    // Renders all the weather cards in a container
    const { locationData, removeLocation } = this.props;
    return (
      <Container mt="3" bg="light" rounded>
        <Locations locationData={locationData} removeLocation={removeLocation} />
      </Container>
    );
  }
}

// Supplies all the weather locations to be displayed
class Locations extends Component {

  // Calls the App's function to remove the specified weather card
  handleClick = index => {
    this.props.removeLocation(index);
  };

  render() {

    // Prevents further work if weather data is not supplied
    if (!this.props) {
      return null;
    }

    // Maps every location data to a react component to be displayed
    const locations = this.props.locationData.map((location, index) => {
      return (
        <Col col="2" mt="4" text="center" p="0" key={index}>
          <div key={index}>
            <p className="font-weight-bold">
              {location.city.name}, {location.city.state}{" "}
            </p>
            <Figure>
              <Figure.Image src={location.city.wicon} />
            </Figure>
            <br />
            Temp: {location.city.temp}
            <br />
            Feels: {location.city.tfeel}
          </div>
          <Button secondary preventDefault text="center" onClick={() => this.handleClick(index)}>Remove</Button>
        </Col>
      );
    });
    
    // Returns the mapped react components to be displayed
    return (
      <Row mx="4" pb="4" justifyContent="between">{locations}</Row>
    );
  }
}

export default Weather;