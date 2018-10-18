import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Route from 'react-router-dom/Route'


class Main extends Component {
  render() {
    return (
      <h1>This is the Main Page</h1>
    );
  }
}

export default Main;
