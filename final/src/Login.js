import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Route from 'react-router-dom/Route'


class Login extends Component {
  render() {
    return (
      <div id="Login-square">
        <div id= "left-side-login">

            <p id="name">Name</p>
            <p id="caption">New Connections in Tech</p>
            <div id="descriptions">
              <p class="adjectives">Adjective</p>
              <p class="adjectives">Other Adjective</p>
              <p class="adjectives">Last Adjective</p>
            
          </div>
        </div>
        <div id="right-side-login">
          <p id="hello">Hello</p>
          <p id="enter">Enter your Login information.</p>
        </div>
      </div>
    );
  }
}

export default Login;
