import React, { Component } from "react";
import "./navbar.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.image = require("./logo.png");
  }

  render() {
    return (
      <nav className="navbar">
        <button>
          <img src={this.image} alt="city tours company" a href="/" />
        </button>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link active">
              About
            </a>
          </li>

          {this.props.loggedInStatus == "NOT_LOGGED_IN" ? (
            <div className="login">
              <li>
                <a href="/login" className="nav-link active">
                  Sign in
                </a>
              </li>
              <li>
                <a href="/register" className="nav-link active">
                  Register
                </a>
              </li>
            </div>
          ) : (
            <div className="login">
              <li>
                <a href="/interface" className="nav-link active">
                  Your Tasks
                </a>
              </li>
              <li>
                <a href="/" className="nav-link active">
                  Log Out
                </a>
              </li>
            </div>
          )}
        </ul>
      </nav>
    );
  }
}
