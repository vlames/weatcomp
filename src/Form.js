// This file describes the Form react component that renders a form.
// Then, based on the user's input, it fetches data from the openweathermap api
// and calls a function from the App component to update the locations array
// with weather and location data

import React, { Component } from "react";
import States from "us-state-codes";
import { Form, Button } from "bootstrap-4-react";

// Defines the structure of one location data
class CityStateForm extends Component {
  state = {
    city: {
      name: "",
      state: "",
      temp: 0,
      tfeel: 0,
      wicon: ""
    }
  };

  // When a user submits answers to input text boxes, the function
  // fetches the nesessary data from the openweathermap and updates
  // the locations array from App
  handleClick = async () => {
    const cityName = document.getElementById("cityName").value;
    let stateName = document.getElementById("stateName").value;
    stateName = States.sanitizeStateName(stateName);
    const stateAbbr = States.getStateCodeByStateName(stateName);
    const domain = "https://api.openweathermap.org/";
    const route = "data/2.5/weather/?q=";
    const query = `${cityName},${stateAbbr},us&appid=${process.env.REACT_APP_API_KEY}`;
    const config = "&units=imperial";
    const url = domain + route + query + config;
    let iconSrc = "https://openweathermap.org/img/wn/";
    
    // Data is waited for until it is fetched
    const fetchedData = await fetch(url)
      .then(data => {
        return data.json();
      })
    
    // If server sends an error code, it is handled so that
    // the app does not crush
    if (fetchedData.cod === "404") {
      alert("Error: " + fetchedData.message);
      document.getElementById("stateName").value = "";
      document.getElementById("cityName").value = "";
      return null;
    }

    // Updates the local state object to be sent over to
    // the App component for locations array update
    this.setState({
      city: {
        name: fetchedData.name,
        state: stateAbbr,
        temp: fetchedData.main.temp,
        tfeel: fetchedData.main.feels_like,
        wicon: iconSrc + fetchedData.weather[0].icon + "@2x.png"
      }
    });

    // Location is sent to be added to the App's locations array
    // and the form fields are reset
    this.props.addLocation(this.state);
    document.getElementById("stateName").value = "";
    document.getElementById("cityName").value = "";
  };

  // Renders the form structure
  render() {
    return (
      <Form p="4">
        <Form.Group>
          <label htmlFor="cityName">City Name</label>
          <Form.Input type="text" id="cityName" placeholder="Enter city name" />
        </Form.Group>
        <Form.Group>
          <label htmlFor="stateName">State</label>
          <Form.Input type="text" id="stateName" placeholder="Enter state name" />
        </Form.Group>
        <Button primary preventDefault onClick={this.handleClick}>Submit</Button>
      </Form>
    );
  }
}

export default CityStateForm;