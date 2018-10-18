import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Route from 'react-router-dom/Route'
import Login from './Login.js'
import Main from './Main.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Login Page</Link>
            </li>
            <li>
              <Link to="/main">Main Page</Link>
            </li>
          </ul>
          <Route path="/" exact component={Login}/>
          <Route path="/main" exact component={Main}/>
        </div>
      </Router>
    );
  }
}
export default App;
