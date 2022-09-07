import React, { useState, Component } from "react";
import Router from "./Router/Router";
import "./component/css/main.css";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router />
        <Home></Home>
      </div>
    );
  }
}

export default App;
