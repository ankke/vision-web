import React, { Component } from 'react';
import '../App.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { NavLink } from 'react-router-dom';
import { routes } from '../constants/routes';
import { addCameraRequest } from './thunks';

const client = new W3CWebSocket('ws://127.0.0.1:5000');

class Example extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }

  render() {
    return (
      <div className="App">
        <NavLink to={routes.homepage}>Menu</NavLink>
        <img src={'logo.png'} alt={'frame'} width={'50%'} height={'50%'} />
        <button
          onClick={() => {
            this.props.get();
          }}
        >
          Add camera
        </button>
      </div>
    );
  }
}

export default Example;
