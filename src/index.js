// The file describes code that imports various components
// to start the app then ReactDOM renders the main component,
// App to start the application

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/weather.css";

ReactDOM.render(<App />, document.getElementById("root"));