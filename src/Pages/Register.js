import React, { Component } from "react";
import axios from "axios";



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      registrationErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props)
  }
  
 

  handleSubmit(event) {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    
    // fetch("http://localhost:8081/app/add", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log("Success:", response);
    //     alert("Sukces")
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     alert("Błąd")
    //   });
    axios
      .post(
        "/app/add",
        {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        if (response.data.status === "created") {
          this.props.handleSucessfulAuth(response.data);
        }
        this.props.router.push("/login");
      })
      .catch((error) => {
        console.log("registration error", error);
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
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
