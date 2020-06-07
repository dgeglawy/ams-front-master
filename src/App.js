import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import NavBar from "./components/Navbar/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogIn from "./Pages/Login";
import Panel from "./Pages/Panel";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    let history = useHistory();
    this.props.handleLogin(data);
  }

  handleLogin(data) {
    let history = useHistory();
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar loggedInStatus={this.state.loggedInStatus} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            ></Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/interface">
              <Panel />
            </Route>
            <Route path="/login">
              <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </Route>
            <Route path="/register">
              <Register handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
