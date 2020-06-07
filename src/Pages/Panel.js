import React from "react";
import "../App.scss";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      conservationStatus: "",
      estimatedPopulation: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props)
  }
  
 

  handleSubmit(event) {
    const data = {
      name: this.state.name,
      conservationStatus: this.state.conservationStatus,
      estimatedPopulation: this.state.estimatedPopulation,
    };
    
    axios
      .post(
        "/app/addspecies",
        {
          name: this.state.name,
          conservationStatus: this.state.conservationStatus,
          estimatedPopulation: this.state.estimatedPopulation,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        if (response.data.status === "created") {
          this.props.handleSucessfulAuth(response.data);
        }
        this.props.router.push("/interface");
      })
      .catch((error) => {
        console.log("adding species error", error);
      });
    event.preventDefault();
  

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter species name"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="conservationStatus"
            placeholder="Conservation Status"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="estimatedPopulation:"
            placeholder="Estimated Population"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add species</button>
        </form>
      </div>
    );
  }
}
