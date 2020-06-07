import React from "react";
import "../App.scss";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Banner
          title="Species Repository"
          subtitle="Welcome to the home page."
        >
          <Link to="/about" className="btn-primary">
            Learn more
          </Link>
        </Banner>
      </Hero>
    );
  }
}
