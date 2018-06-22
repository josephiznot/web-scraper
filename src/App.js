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
    axios.post("/api/scrape-web", {
      userName: this.state.userName,
      selector: document.querySelector(
        "body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--bright.d-lg-flex.flex-justify-between.flex-auto > div > span > div > a:nth-child(1)"
      )
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Joes Web Scraper</h1>
        </header>
        <h3>Enter your github username</h3>
        <input name="userName" onChange={this.handleChange} />
        <br />
        <button onClick={this.webScrape}>Scrape github</button>
      </div>
    );
  }
}

export default App;
