import React, { Component } from "react";
import "../App.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";

const client = new W3CWebSocket("ws://127.0.0.1:5000");

class Example extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }

  render() {
    return (
      <div className="App">
        <NavLink to={routes.EXAMPLE}>Menu</NavLink>
        <img
          src={"http://127.0.0.1:8000/show?id=41"}
          alt={"frame"}
          width={"80%"}
          height={"80%"}
        />
      </div>
    );
  }
}

export default Example;
