import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  webScrape = () => {
    let { userName } = this.state;
    axios.put(`/api/scrape-web`, { userName });
  };
  render() {
    console.log(this.state.userName);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Joes Web Scraper</h1>
        </header>
        <h3>Enter credentials</h3>
        <input
          placeHolder="GitHub userName"
          name="userName"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeHolder="GitHub password"
          name="password"
          onChange={this.handleChange}
        />
        <br />

        <button onClick={this.webScrape}>Scrape github</button>
      </div>
    );
  }
}

export default App;
